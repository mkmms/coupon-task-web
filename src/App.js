import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginRedirect } from "./helpers/routeHelper";
import { AppProvider } from "./hooks/appContext";
import { ErrorProvider } from "./hooks/errorContext";

import BrandHeader from "./components/BrandHeader";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Coupons from './pages/Coupons/index'
import CreateCoupon from "./pages/Coupons/CreateCoupon";
import EditCoupon from "./pages/Coupons/EditCoupon";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <AppProvider>
      <ErrorProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <BrandHeader/>
            </header>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                path="/checkout"
                element={<Checkout />} 
              />
              <Route path="/coupons" element={<Coupons />} />
              <Route exact path="/coupons/new" element={<CreateCoupon />} />
              <Route path="/coupons/:couponId" element={<EditCoupon />} />
              <Route
                path="/login"
                element={
                  <LoginRedirect>
                    <Login />
                  </LoginRedirect>
                }
              />
            </Routes>
          </div>
        </Router>
      </ErrorProvider>
    </AppProvider>
  );
}

export default App;
