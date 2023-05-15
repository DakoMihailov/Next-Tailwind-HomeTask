/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { AddInfoType, EditInfoType, RemoveInfoType } from '@/types'

interface InfoState {
  info: AddInfoType[]
}

const initialState: InfoState = {
  info: [],
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AddInfoType>) => {
      state.info.push(action.payload)
    },
    edit: (state, action: PayloadAction<EditInfoType>) => {
      state.info[action.payload.id!] = action.payload.data
    },
    remove: (state, action: PayloadAction<RemoveInfoType>) => {
      state.info.splice(action.payload.id, 1)
    },
  },
})

export const { add, remove, edit } = infoSlice.actions
export default infoSlice.reducer
