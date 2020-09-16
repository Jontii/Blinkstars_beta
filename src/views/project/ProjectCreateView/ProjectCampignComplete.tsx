import {
  Box,
  Button,
  FormHelperText,
  makeStyles,
  Typography
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Axios from 'axios';
import clsx from 'clsx';
import { Formik } from 'formik';
import moment from 'moment';
import React, { FC, useState } from 'react';
import { completeCampaign } from 'src/slices/campaign';
import { useDispatch } from 'src/store';
import * as Yup from 'yup';
import { CompleteCampaign } from './CampaignTypes';

const useStyles = makeStyles(theme => ({
  root: {},
  addTab: {
    marginLeft: theme.spacing(2)
  },
  tag: {
    '& + &': {
      marginRight: theme.spacing(1)
    }
  },
  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  editor: {
    '& .ql-editor': {
      height: 350
    }
  }
}));

interface ProjectCampaignProps {
  className?: string;
  onBack?: () => void;
  onComplete?: () => void;
}

const ProjectCampignComplete: FC<ProjectCampaignProps> = ({
  className,
  onBack,
  onComplete,
  ...rest
}) => {
  const classes = useStyles();
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const initialValues: CompleteCampaign = {
    startDate: moment().toDate().getTime(),
    endDate: moment().add(2, 'days').toDate().getTime()
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        // startDate: Yup.date(),
        // endDate: Yup.date()
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setStatus({ success: true });
          setSubmitting(false);

          const dates = {
            startDate: values.startDate,
            endDate: values.endDate
          };

          const campaign: CompleteCampaign = { ...values };

          dispatch(completeCampaign(campaign));

          if (onComplete) {
            Axios.post('/api/campaign/', {
              name: 'Jontetest'
            })
              .then(resp => {
                console.log('Posted', resp);
              })
              .catch(error => console.log(error));
            onComplete();
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
        setFieldValue,
        setFieldTouched,
        touched,
        values
      }) => (
        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Typography variant="h3" color="textPrimary">
            Complete Campaign
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Proin tincidunt lacus sed ante efficitur efficitur. Quisque
              aliquam fringilla velit sit amet euismod.
            </Typography>
          </Box>
          <Box mt={4} display="flex" justifyContent="space-between">
            <KeyboardDatePicker
              className={classes.datePicker}
              label="Campaign Start Date"
              format="MM/DD/YYYY"
              name="startDate"
              fullWidth
              inputVariant="outlined"
              value={values.startDate}
              onBlur={() => setFieldTouched('startDate')}
              onClose={() => setFieldTouched('startDate')}
              onAccept={() => setFieldTouched('startDate')}
              onChange={date =>
                setFieldValue('startDate', date.toDate().getTime())
              }
            />
            <KeyboardDatePicker
              className={classes.datePicker}
              label="Campaign End Date"
              format="MM/DD/YYYY"
              name="endDate"
              fullWidth
              inputVariant="outlined"
              value={values.endDate}
              onBlur={() => setFieldTouched('endDate')}
              onClose={() => setFieldTouched('endDate')}
              onAccept={() => setFieldTouched('endDate')}
              onChange={date =>
                setFieldValue('endDate', date.toDate().getTime())
              }
            />
          </Box>

          {Boolean(touched.startDate && errors.startDate) && (
            <Box mt={2}>
              <FormHelperText error>{errors.startDate}</FormHelperText>
            </Box>
          )}
          {Boolean(touched.endDate && errors.endDate) && (
            <Box mt={2}>
              <FormHelperText error>{errors.endDate}</FormHelperText>
            </Box>
          )}

          <Box flexGrow={1} />

          <Box mt={8} display="flex">
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
              Save as draft
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ProjectCampignComplete;
