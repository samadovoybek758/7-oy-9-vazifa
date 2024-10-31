import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: [
        { id: 1, name: "Ali", age: 18 },
        { id: 2, name: "Vali", age: 20 }
 
    ]
}
const StudentsSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        ADD: (state,action) =>{
            state.value = [...state.value, action.payload]
        },
        REMOVE: (state, action) =>{
            state.value = state.value.filter(function (value) {
                return value.id != action.payload
            })
        },
        CLEARE: (state) =>{
            state.value = []
        },
        SEARCH: (state,action) =>{
            state.value = state.value.filter(function (value) {
                return value.id == action.payload
            })
        },
        CHANGEage: (state, action) =>{
            state.value = state.value.map(function (value) {
                if (value.id == action.payload.id) {
                    return { ...value, age: action.payload.age }
                }
                return value
            })
        },
        CHANGEname: (state, action) =>{
            state.value = state.value.map(function (value) {
                if (value.id == action.payload.id) {
                    return { ...value, name: action.payload.name }
                }
                return value
            })
        }
    }
 })

 export default StudentsSlice.reducer;
 export const {ADD,REMOVE,CLEARE,SEARCH,CHANGEage,CHANGEname} = StudentsSlice.actions