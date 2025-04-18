import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import { RootState } from '../../app/store';
import { CityListResult, CityResult } from '../../services/weather-api';
import { selectItem, unselectItem } from './city-slice';

interface CityListItemsProps {
  cityListResults: CityListResult;
}

function CityListItems({ cityListResults }: CityListItemsProps) {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const term = searchParams.get('term');

  const handleLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const selectedItems = useSelector(
    (state: RootState) => state.cities.selectedItems
  );

  const isItemSelected = (id: number) => !!selectedItems[id];

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    city: CityResult
  ) => {
    if (event.target.checked) {
      dispatch(selectItem(city));
    } else {
      dispatch(unselectItem(city));
    }
  };

  return (
    <>
      <div className="column-header">CITIES</div>
      {cityListResults?.map((city, index) => (
        <div key={index} className="cell">
          <input
            type="checkbox"
            checked={isItemSelected(city.id)}
            onChange={(event) => {
              handleCheckboxChange(event, city);
            }}
          />{' '}
          <NavLink
            to={{
              pathname: `/cities/${city.id}`,
              search: term ? `?term=${term}` : '',
            }}
            onClick={handleLinkClick}
          >
            <strong>{city.name}</strong> ({city.country})
          </NavLink>
        </div>
      ))}
    </>
  );
}

export default CityListItems;
