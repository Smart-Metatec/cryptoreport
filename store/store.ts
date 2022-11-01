import {configureStore, combineReducers} from "@reduxjs/toolkit"
import platformSlice from "./slices/platformSlice"

const reducer = combineReducers({
    platform: platformSlice
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
export default store