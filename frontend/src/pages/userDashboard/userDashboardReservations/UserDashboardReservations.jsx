import Divider from "@mui/material/Divider";

import {
  StyledUserDashboardReservations,
  Container,
  MainTitle,
  Section,
  HotelCard,
  HotelRow,
  Icon,
  Span,
} from "./styles.ts";

import { nextReservations } from "../../../mocks/hotelReservations.js";
import { previousReservations } from "../../../mocks/hotelReservations.js";

const UserDashboardReservations = () => {
  return (
    <StyledUserDashboardReservations>
      <Container>
        <MainTitle>Próximas reservas</MainTitle>
        <Section>
          {nextReservations.map((reservation) => (
            <HotelCard key={reservation.hotelName}>
              <HotelRow>
                <Icon
                  width="42px"
                  height="42px"
                  src={reservation.avatar}
                  alt=""
                />
                <Span fontWeight="600">{reservation.hotelName}</Span>
              </HotelRow>
              <Span marginTop="20px" fontSize="14px">
                {reservation.address}
              </Span>
              <HotelRow marginTop="20px">
                <Span fontWeight="600">Check-in:</Span>
                {reservation.checkIn}
              </HotelRow>
              <HotelRow>
                <Span fontWeight="600">Check-out:</Span>
                {reservation.checkOut}
              </HotelRow>
              <HotelRow>
                <Span fontWeight="600">Pet:</Span>
                {reservation.petName}
              </HotelRow>
            </HotelCard>
          ))}
        </Section>

        <Divider />

        <MainTitle marginTop="20px">Próximas reservas</MainTitle>
        <Section>
          {previousReservations.map((reservation) => (
            <HotelCard key={reservation.hotelName}>
              <HotelRow>
                <Icon
                  width="42px"
                  height="42px"
                  src={reservation.avatar}
                  alt=""
                />
                <Span fontWeight="600">{reservation.hotelName}</Span>
              </HotelRow>
              <Span marginTop="20px" fontSize="14px">
                {reservation.address}
              </Span>
              <HotelRow marginTop="20px">
                <Span fontWeight="600">Check-in:</Span>
                {reservation.checkIn}
              </HotelRow>
              <HotelRow>
                <Span fontWeight="600">Check-out:</Span>
                {reservation.checkOut}
              </HotelRow>
              <HotelRow>
                <Span fontWeight="600">Pet:</Span>
                {reservation.petName}
              </HotelRow>
            </HotelCard>
          ))}
        </Section>
      </Container>
    </StyledUserDashboardReservations>
  );
};

export default UserDashboardReservations;
