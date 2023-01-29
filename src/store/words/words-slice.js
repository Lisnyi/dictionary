import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const wordsInitialState = {
    words: []
}

const wordsSlice = createSlice({
    name: "words",
    initialState: wordsInitialState,
    reducers: {
        addWord: {
            reducer({words}, {payload}){
                words.push(payload)
            },
            prepare(data){
                return {
                    payload:{
                        ...data,
                        id: nanoid(),
                    }
                }
            }
        }
    }}
)

export const { addWord } = wordsSlice.actions

export const wordsReducer = wordsSlice.reducer