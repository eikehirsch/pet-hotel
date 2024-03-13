import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { dashboardTableItems } from "../../../../mocks/dashboardTableItems.js";

import {
  Container,
  TitleRow,
  TableTitle,
  RowBox,
  StatusBox,
} from "./styles.ts";

import Button from "../../../../components/button/Button.jsx";

const CartTable = () => {
  return (
    <Container>
      <TitleRow>
        <TableTitle>Vendas recentes</TableTitle>
        <Button
          color="#0a846b"
          backgroundColor="white"
          borderRadius="8px"
          fontWeight="500"
          border="1px solid #0a846b"
        >
          <img style={{ width: "20px" }} src="/images/filter.png" alt="" />
          Filtrar
        </Button>
      </TitleRow>
      <TableContainer sx={{ borderRadius: "10px" }} component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell
                sx={{ fontSize: "12px", color: "#C8CFC7" }}
                align="center"
              >
                ID
              </TableCell>
              <TableCell
                sx={{ fontSize: "12px", color: "#C8CFC7" }}
                align="center"
              >
                Cliente
              </TableCell>
              <TableCell
                sx={{ fontSize: "12px", color: "#C8CFC7" }}
                align="center"
              >
                Item
              </TableCell>
              <TableCell
                sx={{ fontSize: "12px", color: "#C8CFC7" }}
                align="center"
              >
                Data do pedido
              </TableCell>
              <TableCell
                sx={{ fontSize: "12px", color: "#C8CFC7" }}
                align="center"
              >
                Status
              </TableCell>
              <TableCell
                sx={{ fontSize: "12px", color: "#C8CFC7" }}
                align="center"
              >
                Valor
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dashboardTableItems.map((item, index) => (
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
                  {index + 1}
                </TableCell>
                <TableCell align="center">#{item.id}</TableCell>
                <TableCell align="center">
                  <RowBox>
                    <img style={{ width: "30px" }} src={item.avatar} alt="" />
                    <span>{item.name}</span>
                  </RowBox>
                </TableCell>
                <TableCell align="center">
                  <RowBox>
                    <img
                      style={{ width: "30px", borderRadius: "20px" }}
                      src={item.order.avatar}
                      alt=""
                    />
                    <span>{`x ${item.order.quantity}`}</span>
                    <span>{item.order.productName}</span>
                  </RowBox>
                </TableCell>
                <TableCell align="center">{item.checkIn}</TableCell>
                <TableCell align="center">
                  <StatusBox>{item.status}</StatusBox>
                </TableCell>
                <TableCell align="center" style={{ cursor: "pointer" }}>
                  R$ {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CartTable;
