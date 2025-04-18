import ClearButton from '../../components/clear-button';
import { useParams } from 'react-router';
import { useGetCityWeatherQuery } from '../../services/weather-api';

function CityDetails() {
  const { cityId } = useParams();
  const {
    data: forecast,
    error,
    isFetching: isLoading,
  } = useGetCityWeatherQuery(cityId as string);

  return (
    <div className="details-column">
      <div className="column-header">
        CITY WEATHER
        <ClearButton />
      </div>
      {isLoading && <div className="cell">Loading...</div>}
      {error && <div className="cell">Error fetching weather data</div>}
      {!isLoading && !error && forecast && (
        <>
          <div className="cell">City: {forecast.location.name}</div>
          <div className="cell">Country: {forecast.location.country}</div>
          <div className="cell">Temperature: {forecast.current.temp_c}°C</div>
          <div className="cell">
            Feels Like: {forecast.current.feelslike_c}°C
          </div>
          <div className="cell">Humidity: {forecast.current.humidity}%</div>
          <div className="cell">
            Wind Speed: {forecast.current.wind_kph} m/s
          </div>
          <div className="cell">Weather: {forecast.current.condition.text}</div>
        </>
      )}
    </div>
  );
}

export default CityDetails;
