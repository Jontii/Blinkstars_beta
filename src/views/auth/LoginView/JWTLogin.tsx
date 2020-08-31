import {
  Box,
  Button,
  Divider,
  FormHelperText,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import clsx from 'clsx';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import * as Yup from 'yup';

interface JWTLoginProps {
  className?: string;
}

const useStyles = makeStyles(theme => ({
  root: {},
  googleButton: {
    backgroundColor: theme.palette.common.white
  },
  providerIcon: {
    marginRight: theme.spacing(2),
    width: '20px'
  },
  divider: {
    flexGrow: 1
  },
  dividerText: {
    margin: theme.spacing(2)
  }
}));

const JWTLogin: FC<JWTLoginProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  // @ts-ignore
  const { login } = useAuth() as any;
  const isMountedRef = useIsMountedRef();

  const handleFakeLinkedInLogin = async () => {
    try {
      await login('influencer@influencer.io', 'Password123');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button
        className={classes.googleButton}
        fullWidth
        onClick={handleFakeLinkedInLogin}
        size="large"
        variant="contained"
      >
        <img
          alt="Google"
          className={classes.providerIcon}
          src={`${process.env.PUBLIC_URL}/static/images/linkedin.svg`}
        />
        Sign in with LinkedIn
      </Button>
      <Box alignItems="center" display="flex" mt={2}>
        <Divider className={classes.divider} orientation="horizontal" />
        <Typography
          color="textSecondary"
          variant="body1"
          className={classes.dividerText}
        >
          OR
        </Typography>
        <Divider className={classes.divider} orientation="horizontal" />
      </Box>
      <Formik
        initialValues={{
          email: 'influencer@influencer.io',
          password: 'Password123',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await login(values.email, values.password);

            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
            className={clsx(classes.root, className)}
            {...rest}
          >
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              autoFocus
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box mt={2}>
              <Button
                color="secondary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
            </Box>
            <Box mt={2}>
              <Alert severity="info">
                <div>
                  Use{' '}
                  <b>
                    influencer@influencer.io for influencer or company@telia.io
                    for business
                  </b>{' '}
                  and password <b>Password123</b>
                </div>
              </Alert>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

JWTLogin.propTypes = {
  className: PropTypes.string
};

export default JWTLogin;
