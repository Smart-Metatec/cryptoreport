import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState: string = ""

const platformSlice = createSlice({
    name: "platform",
    initialState,
    reducers: {
        setPlatform: (state: string, action: PayloadAction<string>): string => {
            return action.payload
        }
    }
})

export const { setPlatform } = platformSlice.actions
export default platformSlice.reducer