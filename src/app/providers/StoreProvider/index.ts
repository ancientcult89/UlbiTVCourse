import {StoreProvider} from "./ui/StoreProvider";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import type {StateSchema, ReduxStoreWithManager} from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
}