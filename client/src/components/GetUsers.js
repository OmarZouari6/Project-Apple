import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../redux/action";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "react-bootstrap";
import Nav_bar from "./Nav_bar";


const GetUsers = () => {
  const { allUsers, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const columns = [
    {
      id: "userName",
      label: "Nom d'utilisateur",
      minWidth: 170,
      align: "center",
    },
    { 
      id: "email",
      label: "e-mail",
      minWidth: 170, 
      align: "center" 
    },
    {
      id: "_id",
      label: "user ID",
      minWidth: 170,
      align: "center",
    },
    {
      id: "role",
      label: "Role",
      minWidth: 170,
      align: "center",
    },
    {
      id: "phoneNumber",
      label: "numero de telephone",
      minWidth: 170,
      align: "center",
    },
    {
      id: "delete",
      label: "suprimer l'utilisateur",
      minWidth: 170,
      align: "center",
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
        <Nav_bar/>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                          
                        <TableCell key={column.id} align={column.align}>
                          {
                          column.id === "delete"
                            ?<Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                                dispatch(deleteUser(row._id));
                                dispatch(getAllUsers());
                            }}
                            // style={{ width: "10px" , height:"10px"}}
                            >
                              suprimer
                            </Button>
                            :
                             value}
                        </TableCell>
                        
                        
                      );
                      
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={allUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default GetUsers;
