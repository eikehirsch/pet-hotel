import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Product from "./pages/product/Product.jsx";
import Cart from "./pages/cart/Cart.jsx";
import CheckoutDeliver from "./pages/checkout/checkout-deliver/CheckoutDeliver.jsx";
import CheckoutPayment from "./pages/checkout/checkout-payment/CheckoutPayment.jsx";
import ConfirmedOrder from "./pages/checkout/confirmed-order/ConfirmedOrder.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import PetOwner from "./pages/reservation/reservation-owner/PetOwner.jsx";
import PetRegister from "./pages/reservation/reservation-pet/PetRegister.jsx";
import ReservationPayment from "./pages/reservation/reservation-payment/ReservationPayment.jsx";
import ReservationRevision from "./pages/reservation/reservation-revision/ReservationRevision.jsx";
import Lodgings from "./pages/lodgings/Lodgings.jsx";
import Products from "./pages/products/Products.jsx";
import HotelProducts from "./pages/hotelProducts/HotelProducts.jsx";
import HotelDashboard from "./pages/hotelDashboard/HotelDashboard.jsx";
import HotelDashboardPanel from "./pages/hotelDashboard/hotelDashboardPanel/HotelDashboardPanel.jsx";
import HotelDashboardSales from "./pages/hotelDashboard/hotelDashBoardSales/HotelDashboardSales.jsx";
import HotelDashboardHistoric from "./pages/hotelDashboard/hotelDashboardHistoric/HotelDashboardHistoric.jsx";
import HotelDashboardAnalysis from "./pages/hotelDashboard/hotelDashboardAnalysis/HotelDashboardAnalysis.jsx";
import HotelDashboardProducts from "./pages/hotelDashboard/hotelDashboardProducts/HotelDashboardProducts.jsx";
import HotelDashboardProfile from "./pages/hotelDashboard/hotelDashboardProfile/HotelDashboardProfile.jsx";
import UserDashboard from "./pages/userDashboard/UserDashboard.jsx";
import UserDashboardReservations from "./pages/userDashboard/userDashboardReservations/UserDashboardReservations.jsx";
import UserDashboardFavorites from "./pages/userDashboard/userDashboardFavorites/UserDashboardFavorites.jsx";
import UserDashboardOrders from "./pages/userDashboard/userDashboardOrders/UserDashboardOrders.jsx";
import UserDashboardProfile from "./pages/userDashboard/userDashboardProfile/UserDashboardProfile.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/produto" element={<Product />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout-entrega" element={<CheckoutDeliver />} />
        <Route path="/checkout-pagamento" element={<CheckoutPayment />} />
        <Route path="/pedido-confirmado" element={<ConfirmedOrder />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/reserva-tutor" element={<PetOwner />} />
        <Route path="/reserva-pet" element={<PetRegister />} />
        <Route path="/reserva-pagamento" element={<ReservationPayment />} />
        <Route path="/reserva-revisao" element={<ReservationRevision />} />
        <Route path="/hospedagens" element={<Lodgings />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/hotel-products" element={<HotelProducts />} />
        <Route path="/hotel-dashboard" element={<HotelDashboard />}>
          <Route
            path="/hotel-dashboard/painel"
            index
            element={<HotelDashboardPanel />}
          />
          <Route
            path="/hotel-dashboard/vendas"
            element={<HotelDashboardSales />}
          />
          <Route
            path="/hotel-dashboard/historico"
            element={<HotelDashboardHistoric />}
          />
          <Route
            path="/hotel-dashboard/analise"
            element={<HotelDashboardAnalysis />}
          />
          <Route
            path="/hotel-dashboard/produtos"
            element={<HotelDashboardProducts />}
          />
          <Route
            path="/hotel-dashboard/perfil"
            element={<HotelDashboardProfile />}
          />
        </Route>
        <Route path="/user-dashboard" element={<UserDashboard />}>
          <Route
            path="/user-dashboard/reservas"
            element={<UserDashboardReservations />}
          />
          <Route
            path="/user-dashboard/favoritos"
            element={<UserDashboardFavorites />}
          />
          <Route
            path="/user-dashboard/pedidos"
            element={<UserDashboardOrders />}
          />
          <Route
            path="/user-dashboard/perfil"
            element={<UserDashboardProfile />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
