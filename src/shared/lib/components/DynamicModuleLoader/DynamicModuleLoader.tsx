import {useTranslation} from "react-i18next";
import {FC, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager, StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader : FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer] : ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        })

        //работает таким образом, что при диспоузе объекта вызывается коллбек и выполняется код внутри, как я понял
        return () => {
            if(removeAfterUnmount){
                Object.entries(reducers).forEach(([name] : ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        }
    },[]);

    const {t} = useTranslation();

    return (
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;