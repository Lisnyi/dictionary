import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const dictionaryInitialState = {
    dictionary: []
}

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState: dictionaryInitialState,
    reducers: {
        addWord: {
            reducer({dictionary}, {payload}){
                dictionary.push(payload)
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

export const { addWord } = dictionarySlice.actions

export const dictionaryReducer = dictionarySlice.reducer