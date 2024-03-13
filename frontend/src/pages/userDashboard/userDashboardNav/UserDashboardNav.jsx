import { NavLink } from "react-router-dom";

import { StyledUserDashboardNav, Icon } from "./styles.ts";

const UserDashboardNav = () => {
  return (
    <StyledUserDashboardNav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/user-dashboard/reservas"
      >
        <Icon src="/images/reservation.svg" alt="" />
        Minhas reservas
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/user-dashboard/favoritos"
      >
        <Icon src="/images/favorite.svg" alt="" />
        Favoritos
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/user-dashboard/pedidos"
      >
        <Icon src="/images/order.svg" alt="" />
        Meus pedidos
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "#0A846B", color: "white" } : {}
        }
        to="/user-dashboard/perfil"
      >
        <Icon src="/images/profile.svg" alt="" />
        Perfil
      </NavLink>
    </StyledUserDashboardNav>
  );
};

export default UserDashboardNav;
