import { Provider } from "react-redux";
import { MainPage } from "./pages/Main/component";

import store from "./redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/Error/component";
import { RestaurantContainer } from "./components/Restaurant/container";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} >
            <Route path='restaurants/:restaurantId' element={<RestaurantContainer />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
