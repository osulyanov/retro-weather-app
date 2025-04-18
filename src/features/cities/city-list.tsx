import MessageBox from '../../components/message-box';
import CityListItems from './city-list-items';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { WeatherAPILocation } from '../../services/weather-api';
import { Outlet } from 'react-router-dom';

interface CityListProps {
  cityList: WeatherAPILocation[] | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
}

function CityList({ cityList, error, isLoading }: CityListProps) {
  return (
    <>
      <div className="data-report">
        <div className="items-column">
          {error ? (
            <MessageBox message="Error fetching cities" />
          ) : isLoading ? (
            <MessageBox message="Loading..." />
          ) : cityList && cityList.length === 0 ? (
            <MessageBox message="No cities found" />
          ) : cityList && cityList.length > 0 ? (
            <CityListItems cityListResults={cityList} />
          ) : null}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default CityList;
