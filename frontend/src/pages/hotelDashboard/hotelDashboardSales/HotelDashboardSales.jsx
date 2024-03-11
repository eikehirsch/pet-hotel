import {
  StyledHotelDashboardSales,
  ButtonRow,
  SearchBox,
  SearchInput,
  PaginationRow,
} from "./styles.ts";

import Button from "../../../components/button/Button.jsx";

import SalesTable from "./salesTable/SalesTable.jsx";

const HotelDashboardSales = () => {
  return (
    <StyledHotelDashboardSales>
      <ButtonRow>
        <Button
          color="#0a846b"
          backgroundColor="white"
          borderRadius="8px"
          fontWeight="500"
          border="1px solid #0a846b"
        >
          <img style={{ width: "20px" }} src="/images/filter.png" alt="" />
          Filtro
        </Button>
        <SearchBox>
          <img style={{ width: "20px" }} src="/images/search-icon.svg" alt="" />
          <SearchInput placeholder="Buscar produto cadastrado" />
        </SearchBox>
      </ButtonRow>
      <SalesTable />
      <PaginationRow>
        <Button
          color="#0a846b"
          backgroundColor="white"
          borderRadius="8px"
          fontWeight="500"
          border="1px solid #0a846b"
        >
          <img src="/images/arrow-left.svg" alt="" />
          <span>Anterior</span>
        </Button>
        <Button
          color="#0a846b"
          backgroundColor="white"
          borderRadius="8px"
          fontWeight="500"
          border="1px solid #0a846b"
        >
          <span>Próximo</span>
          <img src="/images/arrow-right.svg" alt="" />
        </Button>
      </PaginationRow>
    </StyledHotelDashboardSales>
  );
};

export default HotelDashboardSales;
