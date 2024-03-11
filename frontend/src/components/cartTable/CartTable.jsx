import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ClearIcon from "@mui/icons-material/Clear";

import relatedProducts from "../../mocks/relatedProductCards.js";

import {
  ProductImage,
  CounterContainer,
  CounterDecrease,
  CounterIncrease,
  CounterInput,
  DeleteIcon,
  TableLastRow,
  LastRowButton
} from "./styles.ts";

const CartTable = () => {
  return (
    <TableContainer sx={{ borderRadius: "10px" }} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#adacac" }}
              align="center"
            >
              PRODUTO
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#adacac" }}
              align="center"
            >
              VALOR
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#adacac" }}
              align="center"
            >
              QUANTIDADE
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#adacac" }}
              align="center"
            >
              SUBTOTAL
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", color: "#adacac" }}
              align="center"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {relatedProducts.map((product) => (
            <TableRow
              key={product.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ padding: "6px 16px" }}
                component="th"
                scope="row"
              >
                <ProductImage src={product.image} alt="" />
              </TableCell>
              <TableCell align="center">{product.title}</TableCell>
              <TableCell align="center">R$ {product.price}</TableCell>
              <TableCell align="center">
                <CounterContainer>
                  <CounterDecrease>-</CounterDecrease>
                  <CounterInput value={1} />
                  <CounterIncrease>+</CounterIncrease>
                </CounterContainer>
              </TableCell>
              <TableCell align="center">R$ 79,99</TableCell>
              <TableCell align="center">
                <DeleteIcon>
                  <ClearIcon fontSize={`10px`} />
                </DeleteIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableLastRow>
        <LastRowButton>Continuar comprando</LastRowButton>
        <LastRowButton>Atualizar carrinho</LastRowButton>
      </TableLastRow>
    </TableContainer>
  );
};

export default CartTable;
