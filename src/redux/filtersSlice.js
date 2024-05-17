import { createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'contacts',
    initialState: {
		name: ''
    },
    reducers: {
        filterContacts: {
            reducer(state, action) {
                return action.payload
            },
            prepare(name) {
                return {
                    payload: {
                        name,
                    }
                }
            }
        }
    }
})

export const { filterContacts } = filterSlice.actions
export const filterReduser = filterSlice.reducer