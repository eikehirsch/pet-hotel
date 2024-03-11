import styled from "styled-components";

export const StyledHotelDashboardNav = styled.div`
  height: 100%; /* Full height */
  width: 250px; /* Sidebar width */
  min-width: 250px;
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  /* padding-top: 20px; */
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: black;
    padding: 24px 0px 24px 30px;
    display: flex;
    gap: 14px;
    align-items: center;
    font-size: 15px;
  }

  a:active {
    color: purple; /* Color for visited links */
  }
`;

export const Icon = styled.img`
  width: 22px;
`;
