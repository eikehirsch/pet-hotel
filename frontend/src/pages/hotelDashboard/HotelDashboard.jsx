import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar.jsx";
import HotelDashboardNav from "./hotelDashboardNav/HotelDashboardNav.jsx";

import { StyledHome, Container } from "./styles.ts";

const HotelDashboard = () => {
  return (
    <StyledHome>
      <Navbar />
      <Container>
        <HotelDashboardNav />
        <Outlet />
      </Container>
    </StyledHome>
  );
};

export default HotelDashboard;
