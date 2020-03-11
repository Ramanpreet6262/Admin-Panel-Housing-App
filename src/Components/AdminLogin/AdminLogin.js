import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

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

  const [adminCreds, setAdminCreds] = useState({
    email: '',
    password: ''
  });

  useEffect(() => setAdminCreds(adminCredentials), []);

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Admin Sign in
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(`${adminCreds.email} and ${adminCreds.password}`);
            if (
              values.email === adminCreds.email &&
              values.password === adminCreds.password
            ) {
              console.log('Credentials Matched Hurray!!!');
            } else {
              console.log('Sorry Credentials do not Match !!!!');
            }
            setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(6, 'Must be 6 characters or more')
              .required('Required')
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            return (
              <form
                className={classes.form}
                onSubmit={handleSubmit}
                noValidate
                autoComplete='off'
              >
                <TextField
                  error={errors.email && touched.email}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email && errors.email}
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  error={errors.password && touched.password}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='password'
                  label='Password'
                  name='password'
                  type='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </form>
            );
          }}
        </Formik>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}
