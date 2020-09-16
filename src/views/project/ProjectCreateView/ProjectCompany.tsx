import {
  Box,
  Button,
  FormHelperText,
  makeStyles,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { Formik } from 'formik';
import React, { FC, useEffect } from 'react';
import QuillEditor from 'src/components/QuillEditor';
import useAuth from 'src/hooks/useAuth';
import { companyCampaign, getCompany } from 'src/slices/campaign';
import { useDispatch } from 'src/store';
import * as Yup from 'yup';
import { CompanyCampaign } from './CampaignTypes';

const useStyles = makeStyles(theme => ({
  root: {},
  addTab: {
    marginLeft: theme.spacing(2)
  },
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  editor: {
    '& .ql-editor': {
      height: 350
    }
  },
  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  }
}));

interface ProjectCompanyProps {
  className?: string;
  onBack?: () => void;
  onNext?: () => void;
}

const ProjectCompany: FC<ProjectCompanyProps> = ({
  className,
  onNext,
  onBack,
  ...rest
}) => {
  const classes = useStyles();

  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompany(user));
  }, [dispatch]);

  const initialValues: CompanyCampaign = {
    companyName: user.tier === 'Company' ? user.name : '',
    aboutCompany: user.tier === 'Company' ? user.about : ''
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        companyName: Yup.string()
          .min(3, 'Must be at least 3 characters')
          .max(255)
          .required('Required'),
        aboutCompany: Yup.string().max(3000)
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setStatus({ success: true });
          setSubmitting(false);

          let temp = values;
          temp.aboutCompany.replace(/<[^>]*>?/gm, '');
          const campaign: CompanyCampaign = { ...temp };

          dispatch(companyCampaign(campaign));

          if (onNext) {
            onNext();
          }
        } catch (err) {
          // setErrors({ submit: err.message });
          setStatus({ success: false });
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
        values,
        setFieldValue
      }) => (
        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Typography variant="h3" color="textPrimary">
            About the company
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Proin tincidunt lacus sed ante efficitur efficitur. Quisque
              aliquam fringilla velit sit amet euismod.
            </Typography>
          </Box>
          <Box mt={2}>
            <TextField
              error={Boolean(touched.companyName && errors.companyName)}
              fullWidth
              helperText={touched.companyName && errors.companyName}
              label="Name of the company"
              name="companyName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.companyName}
              variant="outlined"
            />
            <Box mt={2}>
              <Typography variant="subtitle1" color="textSecondary">
                Description
              </Typography>
            </Box>
            <Paper variant="outlined" component={Box}>
              <QuillEditor
                onChange={(value: string) =>
                  setFieldValue('aboutCompany', value)
                }
                value={values.aboutCompany}
                className={classes.editor}
              />
            </Paper>
            {Boolean(touched.aboutCompany && errors.aboutCompany) && (
              <Box mt={2}>
                <FormHelperText error>{errors.aboutCompany}</FormHelperText>
              </Box>
            )}
          </Box>
          <Box mt={6} display="flex">
            {onBack && (
              <Button onClick={onBack} size="large">
                Previous
              </Button>
            )}
            <Box flexGrow={1} />
            <Button
              color="secondary"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              size="large"
            >
              Next
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ProjectCompany;
