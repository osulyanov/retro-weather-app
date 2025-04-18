import { WeatherAPILocation } from '../../services/weather-api';
import { createSlice } from '@reduxjs/toolkit';

export interface CitiesState {
  currentItems: WeatherAPILocation[];
  totalCount: number;
  isLoading: boolean;
  selectedItems: { [key: number]: WeatherAPILocation };
  currentDetails: WeatherAPILocation | null;
}

const initialState: CitiesState = {
  currentItems: [],
  totalCount: 0,
  isLoading: false,
  selectedItems: {},
  currentDetails: null,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    selectItem: (state, action) => {
      const item = action.payload;
      state.selectedItems[item.id] = item;
    },
    unselectItem: (state, action) => {
      const item = action.payload;
      const newSelectedItems = { ...state.selectedItems };
      state.selectedItems = Object.fromEntries(
        Object.entries(newSelectedItems).filter(
          ([key]) => key !== item.id.toString()
        )
      );
    },
    unselectAllItems: (state) => {
      state.selectedItems = {};
    },
  },
});

export const { selectItem, unselectItem, unselectAllItems } =
  citiesSlice.actions;

export default citiesSlice.reducer;
