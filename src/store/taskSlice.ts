import { v4 as uuid } from 'uuid';
import { RootState } from '.';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Task = {
    id: string
    description: string
}

type TaskState = {
    availableTasks: Task[]
    completedTasks: Task[]
}

const initialState: TaskState = {
    availableTasks: [],
    completedTasks: []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, task: PayloadAction<string>) => {
            const taskUUID = uuid();
            const newTask = {id: taskUUID, description: task.payload}
            state.availableTasks = [...state.availableTasks, newTask]
        }
    }
})

export const taskSelect = (state: RootState) => state.task

export const { addTask } = taskSlice.actions
export default taskSlice.reducer