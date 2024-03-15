import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";

export const CustomTable = ({ headers = [], bodies = [] }) => {
  const CustomTableContainer = styled(TableContainer)(() => ({
    "&::-webkit-scrollbar": {
      width: "0px",
    },
  }));

  return (
    <CustomTableContainer
      sx={{
        width: "100%",
        overflowY: "scroll",
        height: "100%",
        border: "4px solid #0047ab",
        borderRadius: "6px",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((item) => {
              return (
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#0047ab",
                    color: "white",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  {item.title}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "white" }}>
          {bodies.map((item) => (
            <TableRow>
              {headers.map((col) => (
                <TableCell>
                  {col.customComponent
                    ? col.customComponent(item)
                    : item[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomTableContainer>
  );
};

export default CustomTable;
