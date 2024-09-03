"use client"

import store from "./store"
import { Provider } from "react-redux"

export function RTkProvider({children}) {
    return <Provider store={store}>
        {children}
    </Provider>
}