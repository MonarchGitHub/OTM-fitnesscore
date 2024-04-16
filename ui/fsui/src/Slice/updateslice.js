import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    scores: [{ "category": "Push", "score": 5.6 }, { "category": "Pull", "score": 6.1 }, { "category": "Squat", "score": 5.9 }, { "category": "Endurance", "score": 3.5 }, { "category": "Core", "score": 5 }]
}


export const updateslice = createSlice({
    name: 'update',
    initialState,
    reducers: {
        updateScore: (state, action) => {
            const score = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

    }
})

export const { addUpdate } = todoSlice.actions

export default updateslice.reducer