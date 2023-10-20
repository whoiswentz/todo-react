import { v4 as uuid } from 'uuid';
import { RootState } from '.';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Task = {
    id: string
    description: string
    completed: boolean
}

type TaskState = {
    tasks: Task[]
    total: number
}

const initialState: TaskState = {
    tasks: [
        {id: uuid(), description: "study react", completed: false},
        {id: uuid(), description: "study rust", completed: true}
    ],
    total: 2
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, task: PayloadAction<string>) => {
            const taskUUID = uuid();
            const newTask = { id: taskUUID, description: task.payload, completed: false }
            state.tasks = [...state.tasks, newTask]
            state.total = state.total + 1
        },
        completeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.map(t => {
                if (t.id == action.payload) {
                    return { ...t, completed: !t.completed };
                }
                return t
            })
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(t => t.id !== action.payload)
        }
    }
})

export const taskSelect = (state: RootState) => state.task

export const { addTask, completeTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer