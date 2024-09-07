import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { data } from "../../public/data/myData";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3B82F6",
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    textAlign: "center",
  },
}));
const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#C3DAFF",
    borderRadius: 2,
    marginBottom: 1,
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#EBF3FE",
    borderRadius: 2,
    marginBottom: 1,
  },
}));
export default function MyTable() {
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table>
        <TableHead sx={{ height: 40 }}>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Kitchen</StyledTableCell>
            <StyledTableCell>No. of Items</StyledTableCell>
            <StyledTableCell>Raised By</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow
              key={row.id}
              onClick={() => {
                console.log(row.id);
              }}
            >
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>
                {new Date(row.date).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }) +
                  " " +
                  new Date(row.date).toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#3B82F6" }}>
                {row.kitchenName}
              </StyledTableCell>
              <StyledTableCell>{row.noOfItems}</StyledTableCell>
              <StyledTableCell>{row.raisedBy}</StyledTableCell>
              <StyledTableCell
                sx={{
                  color: "#3B82F6",
                }}
              >
                {row.status}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
