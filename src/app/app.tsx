import './app.css';
import CityLookup from '../pages/city-lookup';
import ErrorBoundary from './error-boundary';
import MessageBox from '../components/message-box';
import { Route, Routes } from 'react-router-dom';
import NotFound from './not-found';
import Layout from './layout';
import CityDetails from '../features/cities/city-details';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<CityLookup />} />
        <Route path="cities" element={<CityLookup />}>
          <Route path=":cityId" element={<CityDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function AppErrorBoundary() {
  return (
    <ErrorBoundary fallback={<MessageBox message={'APP ERROR'} />}>
      <App />
    </ErrorBoundary>
  );
}

export default AppErrorBoundary;
