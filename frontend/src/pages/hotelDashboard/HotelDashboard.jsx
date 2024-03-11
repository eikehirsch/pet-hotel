import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar.jsx";
import HotelDashboardNav from "./hotelDashboardNav/HotelDashboardNav.jsx";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    175.31deg,
    #c7ded9 3.79%,
    rgba(199, 222, 217, 0) 87.34%
  );
  min-height: 100vh;
  padding-bottom: 100px;
`;

const Container = styled.div`
  margin: 2rem auto auto auto;
  display: flex;
`;

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
