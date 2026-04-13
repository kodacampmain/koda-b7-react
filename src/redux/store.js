import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist";
import storage from "redux-persist/es/storage";

import todos from "./slices/todos.js";
import rickMorty from "./slices/rickMorty.js";
import env from "../utils/environment.js";

const persistConfig = {
    key: "koda7",
    storage,
    // blacklist: ["rickMorty"]
    whitelist: ["todos"]
}

const persistedReducer = persistCombineReducers(persistConfig, {
    todos,
    rickMorty
})

const store = configureStore({
    reducer: persistedReducer,
    devTools: env.environment === "development",
    middleware: (defaultMiddleware) => {
        return defaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    REHYDRATE
                ]
            }
        })
    }
});

export const persistor = persistStore(store)
export default store;