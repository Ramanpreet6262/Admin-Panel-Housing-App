import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import logo from '../../static/assets/99acreslogo.png';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='sticky'>
        <Toolbar variant='dense'>
          <Typography variant='h6' color='inherit'>
            <img
              src={logo}
              style={{ width: '55%', marginTop: '10px' }}
              alt='99acres'
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
