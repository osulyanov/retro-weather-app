import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type CityResult = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};
export type CityListResult = CityResult[];

interface WeatherAPICurrentResponse {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.weatherapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCityList: builder.query<CityListResult, { cityName: string }>({
      query: ({ cityName }) => ({
        url: 'search.json',
        params: {
          key: API_KEY,
          q: cityName,
        },
      }),
    }),
    getCityWeather: builder.query<WeatherAPICurrentResponse, string>({
      query: (cityId) => ({
        url: 'current.json',
        params: {
          key: API_KEY,
          q: `id:${cityId}`,
        },
      }),
    }),
  }),
});

export const { useGetCityListQuery, useGetCityWeatherQuery } = weatherApi;
