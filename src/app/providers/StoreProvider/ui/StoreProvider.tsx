import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import {ReducerManager, StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {ReactNode} from "react";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props : StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;