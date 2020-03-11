import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PeopleIcon from '@material-ui/icons/People';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Loader from '../Loader/Loader';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3F51B5',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(() => ({
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  root: {
    width: '200px',
    marginTop: '25px'
  },
  rootTable: {
    width: '60%',
    marginTop: '20px'
  },
  content: {
    flex: '1 0 auto'
  },
  purple: {
    color: '#fff',
    backgroundColor: '#3F51B5',
    float: 'right',
    marginTop: '-75px'
  },
  icon: {
    fontSize: '26px'
  },
  purpleText: {
    color: '#3F51B5',
    fontWeight: 'bold'
  },
  data: {
    marginLeft: '-100px'
  },
  table: {
    minWidth: 700
  }
}));

export default function AdminDashboard(props) {
  const classes = useStyles();

  console.log(props.users);
  if (props.users === null) {
    return <Loader />;
  } else {
    return (
      <div className={classes.dashboard}>
        <h1>Admin Dashboard</h1>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <div className={classes.data}>
              <Typography component='h3' variant='h5'>
                Users
              </Typography>
              <Typography variant='h4' className={classes.purpleText}>
                {props.users.length}
              </Typography>
            </div>
            <Avatar className={classes.purple}>
              <PeopleIcon className={classes.icon} />
            </Avatar>
          </CardContent>
        </Card>
        <TableContainer component={Paper} className={classes.rootTable}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align='right'>Email</StyledTableCell>
                <StyledTableCell align='right'>Phone</StyledTableCell>
                <StyledTableCell align='right'>Gender</StyledTableCell>
                <StyledTableCell align='right'>Country</StyledTableCell>
                <StyledTableCell align='right'>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.users.map(user => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component='th' scope='row'>
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{user.email}</StyledTableCell>
                  <StyledTableCell align='right'>{user.phone}</StyledTableCell>
                  <StyledTableCell align='right'>{user.gender}</StyledTableCell>
                  <StyledTableCell align='right'>
                    {user.country}
                  </StyledTableCell>
                  <StyledTableCell align='right'></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
