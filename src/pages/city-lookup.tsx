import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../features/cities/search-form';
import CityList from '../features/cities/city-list';
import { useGetCityListQuery } from '../services/weather-api';
import MessageBox from '../components/message-box.tsx';

function CityLookup() {
  const navigate = useNavigate();
  const savedCityName = localStorage.getItem('cityName');
  const [cityName, setCityName] = useState(savedCityName || '');
  const {
    data: cityList,
    error,
    isFetching: isLoading,
  } = useGetCityListQuery({ cityName });

  const handleSearch = (cityName: string) => {
    setCityName(cityName);
    navigate(`/?term=${cityName}`);
  };

  useEffect(() => {
    localStorage.setItem('cityName', cityName);
  }, [cityName]);

  return (
    <>
      <SearchForm setCityName={handleSearch} defaultValue={cityName} />
      {cityName ? (
        <CityList cityList={cityList} error={error} isLoading={isLoading} />
      ) : (
        <MessageBox message={'Input city name in the field above'} />
      )}
    </>
  );
}

export default CityLookup;
