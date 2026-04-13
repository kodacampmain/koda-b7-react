import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchApi from "../../utils/fetch.js";

const getCharactersThunk = createAsyncThunk("rick-morty/get-characters",
    async (payload, { rejectWithValue }) => {
        try {
            const baseUrl = "https://rickandmortyapi.com/api/character"
            const searchParam = payload ? `?page=${payload}` : ""
            const data = await fetchApi(`${baseUrl}${searchParam}`)
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    })

const initialState = {
    characters: [],
    info: {},
    status: {
        getCharacters: {
            isPending: false,
            isFulfilled: false,
            isRejected: false
        },
    },
    error: {
        getCharacters: null
    }
}
const rickMortySlice = createSlice({
    name: "rick-morty",
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        return builder.addAsyncThunk(getCharactersThunk, {
            pending: (prevState) => {
                prevState.status.getCharacters.isPending = true
                prevState.status.getCharacters.isFulfilled = false
                prevState.status.getCharacters.isRejected = false
            },
            fulfilled: (prevState, { payload }) => {
                prevState.status.getCharacters.isPending = false
                prevState.status.getCharacters.isFulfilled = true
                prevState.characters = payload.results
                prevState.info = payload.info
            },
            rejected: (prevState, { payload }) => {
                prevState.status.getCharacters.isPending = false
                prevState.status.getCharacters.isRejected = true
                prevState.error.getCharacters = payload
            }
        })
    }
})

export const rickMortyActions = {
    ...rickMortySlice.actions,
    getCharactersThunk
}
export default rickMortySlice.reducer