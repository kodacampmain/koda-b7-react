import { configureStore } from "@reduxjs/toolkit";

import todos from "./slices/todos.js";

const store = configureStore({
    reducer: {
        todos
    }
});

export default store;