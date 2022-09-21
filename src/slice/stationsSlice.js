import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const stationsReducer = createSlice({
    name: 'stations',
    initialState,
    reducers: {
        addStations: (state, action) => {
            const network = action.payload
            state[network.name] = network.stations
        }
    }
})

export const { addStations } = stationsReducer.actions
export default stationsReducer.reducer