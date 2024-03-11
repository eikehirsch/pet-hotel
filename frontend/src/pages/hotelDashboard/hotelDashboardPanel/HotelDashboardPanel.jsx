import {
  StyledHotelDashboardPanel,
  FirstRow,
  GuestsBox,
  GuestsTitle,
  GuestCardsContainer,
  GuestCard,
  GuestAvatar,
  GuestName,
  GuestService,
  GuestDate,
  GuestPrice,
  GuestPayStatus,
  DateCalendarBox,
  SecondRow,
  OccupantsBox,
  OccupantsTitle,
  OccupantsCardContainer,
  OccupantCard,
  OccupantAvatar,
  OccupantMiddleBox,
  OccupantName,
  OccupantServiceBox,
  OccupantService,
  OccupantDate,
  OccupantRightBox,
  OccupantPrice,
  OccupantPayStatus,
  AnalysisBox,
  AnalysisTitle,
  RadialChartsBox,
  RadialChartsDetailsBox,
  AddOccupantsButton,
} from "./styles.ts";

import DateCalendarServerRequest from "./dateCalendar/DateCalendar.jsx";
import BarCharts from "./barCharts/BarCharts.jsx";
import RadialCharts from "./radialCharts/RadialCharts.jsx";

import guests from "../../../mocks/guests";
import occupants from "../../../mocks/occupants";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const HotelDashboardPanel = () => {
  return (
    <StyledHotelDashboardPanel>
      <FirstRow>
        <GuestsBox>
          <GuestsTitle>Hóspedes a chegar</GuestsTitle>
          <GuestCardsContainer>
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              navigation={true}
              modules={[Pagination, Navigation]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {guests.map((guest) => (
                <SwiperSlide key={guest.name}>
                  <GuestCard status={guest.status}>
                    <GuestAvatar src={guest.img} />
                    <GuestName status={guest.status}>{guest.name}</GuestName>
                    <GuestService status={guest.status}>
                      {guest.service}
                    </GuestService>
                    <GuestDate status={guest.status}>{guest.date}</GuestDate>
                    <GuestPrice>{`R$ ${guest.price}`}</GuestPrice>
                    <GuestPayStatus>{guest.status}</GuestPayStatus>
                  </GuestCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </GuestCardsContainer>
        </GuestsBox>
        <DateCalendarBox>
          <DateCalendarServerRequest />
        </DateCalendarBox>
      </FirstRow>
      <SecondRow>
        <OccupantsBox>
          <OccupantsTitle>Ocupantes atuais</OccupantsTitle>
          <OccupantsCardContainer>
            {occupants.map((occupant) => (
              <OccupantCard key={occupant.name}>
                <OccupantAvatar src={occupant.avatar} />
                <OccupantMiddleBox>
                  <OccupantName>{occupant.name}</OccupantName>
                  <OccupantServiceBox>
                    {occupant.service.map((service) => (
                      <OccupantService service={service} key={service}>
                        {service}
                      </OccupantService>
                    ))}
                  </OccupantServiceBox>
                  <OccupantDate>{occupant.date}</OccupantDate>
                </OccupantMiddleBox>
                <OccupantRightBox>
                  <OccupantPrice>R$ {occupant.price}</OccupantPrice>
                  <OccupantPayStatus>{occupant.status}</OccupantPayStatus>
                </OccupantRightBox>
              </OccupantCard>
            ))}
          </OccupantsCardContainer>
        </OccupantsBox>
        <AnalysisBox>
          <AnalysisTitle>Análise</AnalysisTitle>
          <RadialChartsBox>
            <RadialCharts />
            <RadialChartsDetailsBox>
              <span>
                Taxa de ocupação:{" "}
                <span style={{ color: "#0a846b", fontWeight: "bold" }}>
                  75%
                </span>
              </span>
              <span>
                Disponível:{" "}
                <span style={{ color: "#0a846b", fontWeight: "bold" }}>
                  25%
                </span>
              </span>
            </RadialChartsDetailsBox>
          </RadialChartsBox>
          <AnalysisTitle>Receita mensal</AnalysisTitle>
          <BarCharts />
          <AddOccupantsButton>+ Adicionar Ocupantes</AddOccupantsButton>
        </AnalysisBox>
      </SecondRow>
    </StyledHotelDashboardPanel>
  );
};

export default HotelDashboardPanel;
