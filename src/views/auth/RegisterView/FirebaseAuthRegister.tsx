import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormHelperText,
  Link,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import * as Yup from 'yup';

interface FirebaseAuthRegisterProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  googleButton: {
    backgroundColor: theme.palette.common.white
  },
  providerIcon: {
    marginRight: theme.spacing(2)
  },
  divider: {
    flexGrow: 1
  },
  dividerText: {
    margin: theme.spacing(2)
  }
}));

const FirebaseAuthRegister: FC<FirebaseAuthRegisterProps> = ({
  className,
  ...rest
}) => {
  const classes = useStyles();
  // @ts-ignore
  const { createUserWithEmailAndPassword, signInWithGoogle } = useAuth() as any;
  const isMountedRef = useIsMountedRef();

  const handleGoogleClick = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button
        className={classes.googleButton}
        fullWidth
        onClick={handleGoogleClick}
        size="large"
        variant="contained"
      >
        <img
          alt="Google"
          className={classes.providerIcon}
          src={`${process.env.PUBLIC_URL}/static/images/google.svg`}
        />
        Register with Google
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
          email: '',
          password: '',
          policy: true,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string()
            .min(7)
            .max(255)
            .required('Password is required'),
          policy: Yup.boolean().oneOf([true], 'This field must be checked')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await createUserWithEmailAndPassword(values.email, values.password);

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
            className={clsx(classes.root, className)}
            onSubmit={handleSubmit}
            {...rest}
          >
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
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
            <Box alignItems="center" display="flex" mt={2} ml={-1}>
              <Checkbox
                checked={values.policy}
                name="policy"
                onChange={handleChange}
              />
              <Typography variant="body2" color="textSecondary">
                I have read the{' '}
                <Link component="a" href="#" color="secondary">
                  Terms and Conditions
                </Link>
              </Typography>
            </Box>
            {Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>{errors.policy}</FormHelperText>
            )}
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
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

FirebaseAuthRegister.propTypes = {
  className: PropTypes.string
};

export default FirebaseAuthRegister;
