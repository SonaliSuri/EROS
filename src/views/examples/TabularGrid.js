import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

var rows =['Rows not defined'];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



console.log(rows);
export default function CustomizedTables(props) {
    console.log(props);
  const classes = useStyles();
if (props.values.length>0)
{
    rows=props.values
}
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Form Id</StyledTableCell>
            <StyledTableCell align="left">Ship Type</StyledTableCell>
            <StyledTableCell align="left">Ship Name&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="left">Port&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="left">Registration Date&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.form_id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.ship_type}</StyledTableCell>
              <StyledTableCell align="left">{row.proposed_ship_name}</StyledTableCell>
              <StyledTableCell align="left">{row.port}</StyledTableCell>
              <StyledTableCell align="left">{row.registration_date}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
