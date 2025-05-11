import { configureStore } from "@reduxjs/toolkit";
import { commentApi } from "../features/comments/commentApi";
import { recipeApi } from "../features/recipes/recipeApi";



export const store = configureStore({
  reducer: {
    [commentApi.reducerPath]: commentApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    commentApi.middleware,
    recipeApi.middleware
  ])
})