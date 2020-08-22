import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormHelperText,
  IconButton,
  makeStyles,
  Paper,
  SvgIcon,
  TextField,
  Typography
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import clsx from 'clsx';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect, useState, FC } from 'react';
import { Plus as PlusIcon } from 'react-feather';
import FilesDropzone from 'src/components/FilesDropzone';
import QuillEditor from 'src/components/QuillEditor';
import * as Yup from 'yup';

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
  onNext?: () => void;
}

const ProjectCampagin: FC<ProjectCampaignProps> = ({
  className,
  onBack,
  onNext,
  ...rest
}) => {
  const classes = useStyles();
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');

  return (
    <Formik
      initialValues={{
        campaignTitle: '',
        campaignUrl: '',
        campaignBudget: '',
        startDate: new Date(),
        endDate: new Date(),
        tags: ['tag1', 'tag2', 'tag3']
      }}
      validationSchema={Yup.object().shape({
        campaignTitle: Yup.string()
          .min(3, 'Must be at least 3 characters')
          .max(255)
          .required('Required'),
        // tags: Yup.array(),
        startDate: Yup.date(),
        endDate: Yup.date()
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setStatus({ success: true });
          setSubmitting(false);

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
            About the campaign
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Proin tincidunt lacus sed ante efficitur efficitur. Quisque
              aliquam fringilla velit sit amet euismod.
            </Typography>
          </Box>
          <Box mt={4}>
            <TextField
              error={Boolean(touched.campaignTitle && errors.campaignTitle)}
              fullWidth
              helperText={touched.campaignTitle && errors.campaignTitle}
              label="Campaign title"
              name="campaignTitle"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.campaignTitle}
              variant="outlined"
            />
            <Paper variant="outlined" component={Box}>
              <QuillEditor
                handleChange={e => {
                  setContent(e.value);
                }}
                value={content}
                placeholder="Describe the purpose of the campagin"
                className={classes.editor}
              />
            </Paper>

            <Box mt={4}>
              <Card>
                <CardContent>
                  <FilesDropzone />
                </CardContent>
              </Card>
            </Box>

            <Box mt={8} display="flex" justifyContent="space-between">
              <KeyboardDatePicker
                className={classes.datePicker}
                label="Start Date"
                format="MM/DD/YYYY"
                name="startDate"
                fullWidth
                inputVariant="outlined"
                value={values.startDate}
                onBlur={() => setFieldTouched('startDate')}
                onClose={() => setFieldTouched('startDate')}
                onAccept={() => setFieldTouched('startDate')}
                onChange={date => setFieldValue('startDate', date)}
              />
              <KeyboardDatePicker
                className={classes.datePicker}
                label="End Date"
                format="MM/DD/YYYY"
                name="endDate"
                fullWidth
                inputVariant="outlined"
                value={values.endDate}
                onBlur={() => setFieldTouched('endDate')}
                onClose={() => setFieldTouched('endDate')}
                onAccept={() => setFieldTouched('endDate')}
                onChange={date => setFieldValue('endDate', date)}
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

            <Box mt={8}>
              <TextField
                error={Boolean(touched.campaignUrl && errors.campaignUrl)}
                fullWidth
                helperText={touched.campaignUrl && errors.campaignUrl}
                label="Campaign URL"
                name="campaignUrl"
                placeholder="https://..."
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.campaignUrl}
                variant="outlined"
              />
            </Box>

            <Box mt={8} display="flex" alignItems="center">
              <Box display="flex" width="50%">
                <TextField
                  label="Campaign hashtags"
                  name="tags"
                  fullWidth
                  value={tag}
                  onChange={event => setTag(event.target.value)}
                  variant="outlined"
                />
                <IconButton
                  // variant="contained"
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
              <Box display="flex" width="50%">
                <TextField
                  error={Boolean(
                    touched.campaignBudget && errors.campaignBudget
                  )}
                  helperText={touched.campaignBudget && errors.campaignBudget}
                  label="Campaign budget"
                  name="campaignBudget"
                  fullWidth
                  placeholder="9 999 999 SEK"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.campaignBudget}
                  variant="outlined"
                />
              </Box>
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
            {Boolean(touched.tags && errors.tags) && (
              <Box mt={2}>
                <FormHelperText error>{errors.tags}</FormHelperText>
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

export default ProjectCampagin;
