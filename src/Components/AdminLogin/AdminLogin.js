import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import adminCredentials from '../../Data/adminLoginCreds';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='http://localhost:3000/'>
        99 Acres
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function AdminLogin() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminCreds, setAdminCreds] = useState({
    email: '',
    password: ''
  });

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`${adminCreds.email} and ${adminCreds.password}`);
    if (email === adminCreds.email && password === adminCreds.password) {
      console.log('Credentials Matched Hurray!!!');
    } else {
      console.log('Sorry Credentials do not Match !!!!');
    }
  };

  useEffect(() => setAdminCreds(adminCredentials), []);

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Admin Sign in
        </Typography>
        <form className={classes.form} noValidate autoComplete='off'>
          <FormControl variant='outlined' margin='normal' fullWidth required>
            <InputLabel htmlFor='component-outlined'>Email Address</InputLabel>
            <OutlinedInput
              id='email'
              value={email}
              onChange={handleEmailChange}
              label='Email Address *'
              name='email'
              autoComplete='email'
              autoFocus
            />
          </FormControl>
          <FormControl variant='outlined' margin='normal' fullWidth required>
            <InputLabel htmlFor='component-outlined'>Password</InputLabel>
            <OutlinedInput
              id='password'
              value={password}
              onChange={handlePasswordChange}
              label='Password *'
              name='password'
              type='password'
            />
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}
