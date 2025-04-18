import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from '../services/weather-api';
import citiesReducer from '../features/cities/city-slice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
