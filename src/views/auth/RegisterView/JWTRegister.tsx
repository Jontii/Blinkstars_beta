import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Link,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { ChangeEvent, FC, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import * as Yup from 'yup';

interface JWTRegisterProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const JWTRegister: FC<JWTRegisterProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { register } = useAuth() as any;
  const isMountedRef = useIsMountedRef();

  const userOptions = ['Company', 'Influencer'];

  const [user, setUser] = useState<string>(userOptions[0]);

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setUser(event.target.value);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        // usertype: user,
        password: '',
        policy: false,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        name: Yup.string().max(255).required('Name is required'),
        // usertype: Yup.string().required('Must choose a type of account'),
        password: Yup.string().min(7).max(255).required('Password is required'),
        policy: Yup.boolean().oneOf([true], 'This field must be checked')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          //TODO Need to add usertype here
          await register(values.email, values.name, values.password);

          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
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
            error={Boolean(touched.name && errors.name)}
            fullWidth
            helperText={touched.name && errors.name}
            label="Name"
            margin="normal"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
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
            // error={Boolean(touched.usertype && errors.usertype)}
            // helperText={touched.usertype && errors.usertype}
            fullWidth
            label="Type of user"
            margin="normal"
            name="usertype"
            onBlur={handleBlur}
            onChange={handleSelectChange}
            select
            SelectProps={{ native: true }}
            value={user}
            variant="outlined"
          >
            {userOptions.map(userCategory => (
              <option key={userCategory} value={userCategory}>
                {userCategory}
              </option>
            ))}
          </TextField>
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
  );
};

JWTRegister.propTypes = {
  className: PropTypes.string
};

export default JWTRegister;
