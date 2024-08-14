import currentPageReducer from '@/app/store/slices/currentPage'
import themeReducer from '@/app/store/slices/themeSlice'
import totalPagesReducer from '@/app/store/slices/totalPages'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    currentPage: currentPageReducer,
    totalPages: totalPagesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
