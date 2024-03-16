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
  StyledCartTable,
  ProductImage,
  CounterContainer,
  CounterDecrease,
  CounterIncrease,
  CounterInput,
  DeleteIcon,
  TableLastRow,
  LastRowButton,
} from "./styles.ts";

const CartTable = () => {
  return (
    <StyledCartTable>
      <TableContainer sx={{ borderRadius: "10px" }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell
                sx={{
                  display: { padding: "18px 0px", sm: "table-cell" },
                  fontSize: "14px",
                  color: "#adacac",
                }}
                align="center"
              >
                PRODUTO
              </TableCell>
              <TableCell
                sx={{
                  display: { padding: "18px 0px", sm: "table-cell" },
                  fontSize: "14px",
                  color: "#adacac",
                }}
                padding="0px"
                align="center"
              >
                VALOR
              </TableCell>
              <TableCell
                sx={{
                  display: { padding: "18px 0px", sm: "table-cell" },
                  fontSize: "14px",
                  color: "#adacac",
                }}
                align="center"
              >
                QUANT.
              </TableCell>
              <TableCell
                sx={{
                  display: { padding: "18px 0px", sm: "table-cell" },
                  fontSize: "14px",
                  color: "#adacac",
                }}
                align="center"
              >
                SUBTOTAL
              </TableCell>
              <TableCell
                sx={{
                  display: { padding: "18px 0px", sm: "table-cell" },
                  fontSize: "14px",
                  color: "#adacac",
                }}
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
                  sx={{
                    display: { padding: "6px 8px", sm: "table-cell" },
                    fontSize: "14px",
                    color: "#adacac",
                  }}
                  align="center"
                  component="th"
                  scope="row"
                >
                  <ProductImage src={product.image} alt="" />
                </TableCell>
                <TableCell
                  sx={{
                    display: { padding: "0px 0px", sm: "table-cell" },
                    fontSize: "14px",
                    color: "#adacac",
                  }}
                  align="center"
                >
                  {product.title}
                </TableCell>
                <TableCell
                  sx={{
                    display: { padding: "0px 0px", sm: "table-cell" },
                    fontSize: "14px",
                    color: "#adacac",
                  }}
                  align="center"
                >
                  R$ {product.price}
                </TableCell>
                <TableCell
                  sx={{
                    display: { padding: "0px 0px", sm: "table-cell" },
                    fontSize: "14px",
                    color: "#adacac",
                  }}
                  align="center"
                >
                  <CounterContainer>
                    <CounterDecrease>-</CounterDecrease>
                    <CounterInput value={1} />
                    <CounterIncrease>+</CounterIncrease>
                  </CounterContainer>
                </TableCell>
                <TableCell
                  sx={{
                    display: { padding: "0px 0px", sm: "table-cell" },
                    fontSize: "14px",
                    color: "#adacac",
                  }}
                  align="center"
                >
                  R$ 79,99
                </TableCell>
                <TableCell
                  sx={{
                    display: { padding: "0px 4px", sm: "table-cell" },
                    fontSize: "14px",
                    color: "#adacac",
                  }}
                  align="center"
                >
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
    </StyledCartTable>
  );
};

export default CartTable;
