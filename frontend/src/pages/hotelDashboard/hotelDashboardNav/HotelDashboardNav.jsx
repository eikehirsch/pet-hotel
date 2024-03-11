import { NavLink } from "react-router-dom";

import { StyledHotelDashboardNav, Icon } from "../hotelDashboardNav/styles.ts";

const HotelDashboardNav = () => {
  return (
    <StyledHotelDashboardNav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/hotel-dashboard/painel"
      >
        <Icon src="/images/barras.svg" alt="" />
        Painel
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/hotel-dashboard/vendas"
      >
        <Icon src="/images/cifra.svg" alt="" />
        Vendas
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/hotel-dashboard/historico"
      >
        <Icon src="/images/historico.svg" alt="" />
        Histórico de clientes
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/hotel-dashboard/analise"
      >
        <Icon src="/images/analise.svg" alt="" />
        Análise
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/hotel-dashboard/produtos"
      >
        <Icon src="/images/produtos.svg" alt="" />
        Produtos
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/hotel-dashboard/perfil"
      >
        <Icon src="/images/perfil.svg" alt="" />
        Perfil
      </NavLink>
    </StyledHotelDashboardNav>
  );
};

export default HotelDashboardNav;
