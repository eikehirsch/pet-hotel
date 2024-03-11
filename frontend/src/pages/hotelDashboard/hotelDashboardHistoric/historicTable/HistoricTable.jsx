import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { dashboardTableItems } from "../../../../mocks/dashboardTableItems.js";

import {
  ProductImage,
  NameColumn,
  StatusColumn,
  StatusBox,
  VisualizeIcon,
} from "./styles.ts";

const CartTable = () => {
  return (
    <TableContainer sx={{ borderRadius: "10px" }} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#0A846B" }}
              align="center"
            >
              NOME
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#0A846B" }}
              align="center"
            >
              PET
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#0A846B" }}
              align="center"
            >
              STATUS
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#0A846B" }}
              align="center"
            >
              CHECK-IN
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#0A846B" }}
              align="center"
            >
              CHECK-OUT
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#0A846B" }}
              align="center"
            >
              RECIBO
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#0A846B" }}
              align="center"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dashboardTableItems.map((item) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ padding: "6px 16px" }}
                align="center"
                component="th"
                scope="row"
              >
                <ProductImage src={item.avatar} alt="" />
              </TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">
                <NameColumn>
                  <span>{item.petName}</span> {item.petType}
                </NameColumn>
              </TableCell>
              <TableCell align="center">
                <StatusColumn>
                  <StatusBox>· {item.status}</StatusBox>{" "}
                  <span>Pago em {item.statusDate}</span>
                </StatusColumn>
              </TableCell>
              <TableCell align="center">{item.checkIn}</TableCell>
              <TableCell align="center">{item.checkOut}</TableCell>
              <TableCell align="center" style={{ cursor: "pointer" }}>
                Visualizar
              </TableCell>
              <TableCell align="center">
                <VisualizeIcon>
                  <img src="/images/visualize.svg" alt="" />
                </VisualizeIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
