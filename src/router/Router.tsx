import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import LeapYearChecker from '../pages/LeapYearChecker';
import WEBbeeshop from '../components/webbeeshop/weebbeeshop';
import FortuneTeller from '../pages/FortuneTeller';
import Calculator from '../pages/Calculator';
const Router = () => {
  return (
    <Routes> 
      <Route path="/" index element={<MainPage />} />
      <Route path="year" index element={<LeapYearChecker />} />
      <Route path="web" index element={<WEBbeeshop />} />
      <Route path="faqs" index element={<FortuneTeller />} />
      <Route path="calculator" index element={<Calculator/>}/>
    </Routes>
  );
};

export default Router;
