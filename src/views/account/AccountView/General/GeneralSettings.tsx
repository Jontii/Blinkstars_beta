import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  makeStyles,
  SvgIcon,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import Autocomplete from '@material-ui/lab/Autocomplete';
import clsx from 'clsx';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import { Plus as PlusIcon } from 'react-feather';
import { User } from 'src/types/user';
import wait from 'src/utils/wait';
import * as Yup from 'yup';
import countries from './countries';

interface GeneralSettingsProps {
  className?: string;
  user: User;
}

const useStyles = makeStyles(theme => ({
  root: {},
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  addTab: {
    marginLeft: theme.spacing(2)
  }
}));

const GeneralSettings: FC<GeneralSettingsProps> = ({
  className,
  user,
  ...rest
}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [tag, setTag] = useState<string>('');

  return (
    <Formik
      enableReinitialize
      initialValues={{
        canHire: user.canHire || false,
        city: user.city || '',
        country: user.country || '',
        email: user.email || '',
        isPublic: user.isPublic || false,
        name: user.name || '',
        phone: user.phone || '',
        state: user.state || '',
        tags: ['Technology', 'Environment'],
        submit: null
      }}
      validationSchema={Yup.object().shape({
        canHire: Yup.bool(),
        city: Yup.string().max(255),
        country: Yup.string().max(255),
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        isPublic: Yup.bool(),
        name: Yup.string().max(255).required('Name is required'),
        phone: Yup.string(),
        state: Yup.string()
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          // NOTE: Make API request
          await wait(200);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Profile updated', {
            variant: 'success'
          });
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
        setFieldValue,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Card className={clsx(classes.root, className)} {...rest}>
            <CardHeader title="Profile" />
            <Divider />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={
                      touched.email && errors.email
                        ? errors.email
                        : 'We will use this email to contact you'
                    }
                    label="Email Address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.phone && errors.phone)}
                    fullWidth
                    helperText={touched.phone && errors.phone}
                    label="Phone Number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Autocomplete
                    getOptionLabel={option => option.text}
                    options={countries}
                    renderInput={params => (
                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        onChange={handleChange}
                        variant="outlined"
                        {...params}
                      />
                    )}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.state && errors.state)}
                    fullWidth
                    helperText={touched.state && errors.state}
                    label="State/Region"
                    name="state"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.state}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.city && errors.city)}
                    fullWidth
                    helperText={touched.city && errors.city}
                    label="City"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box mt={3} display="flex" alignItems="center">
                    <TextField
                      fullWidth
                      label="Interests"
                      name="tags"
                      value={tag}
                      onChange={event => setTag(event.target.value)}
                      variant="outlined"
                    />
                    <IconButton
                      className={classes.addTab}
                      onClick={() => {
                        if (!tag) {
                          return;
                        }

                        setFieldValue('tags', [...values.tags, tag]);
                        setTag('');
                      }}
                    >
                      <SvgIcon>
                        <PlusIcon />
                      </SvgIcon>
                    </IconButton>
                  </Box>
                  <Box mt={2}>
                    {values.tags.map((tag, i) => (
                      <Chip
                        variant="outlined"
                        key={i}
                        label={tag}
                        className={classes.tag}
                        onDelete={() => {
                          const newTags = values.tags.filter(t => t !== tag);

                          setFieldValue('tags', newTags);
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="flex-start"
                    mt="24px"
                  >
                    <Button
                      style={{ height: '54px' }}
                      size="large"
                      fullWidth
                      startIcon={<GetAppIcon />}
                    >
                      Import Linkedin Connections
                    </Button>
                  </Box>
                </Grid>

                {user.name !== 'Emilee Simchenko' && (
                  <>
                    <Grid item md={6} xs={12}>
                      <Typography variant="h6" color="textPrimary">
                        Make Contact Info Public
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Means that anyone viewing your profile will be able to
                        see your contacts details
                      </Typography>
                      <Switch
                        checked={values.isPublic}
                        edge="start"
                        name="isPublic"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Typography variant="h6" color="textPrimary">
                        Available to hire
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Toggling this will let companies know that you are
                        available for new campaigns
                      </Typography>
                      <Switch
                        checked={values.canHire}
                        edge="start"
                        name="canHire"
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
              {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box p={2} display="flex" justifyContent="flex-end">
              <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Save Changes
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  user: PropTypes.object.isRequired
};

export default GeneralSettings;
