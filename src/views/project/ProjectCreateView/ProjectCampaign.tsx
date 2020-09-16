import {
  Box,
  Button,
  Chip,
  FormHelperText,
  IconButton,
  makeStyles,
  Paper,
  SvgIcon,
  TextField,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { Formik } from 'formik';
import React, { FC, useState } from 'react';
import { Plus as PlusIcon } from 'react-feather';
import QuillEditor from 'src/components/QuillEditor';
import { createCampaign } from 'src/slices/campaign';
import { useDispatch } from 'src/store';
import * as Yup from 'yup';
import { CreateCampaign } from './CampaignTypes';

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
  const [hashtag, setHashTags] = useState('');
  const dispatch = useDispatch();

  const initalValues: CreateCampaign = {
    campaignTitle: '',
    campaignDescription: '',
    campaignUrl: '',
    campaignBudget: '',
    hashtags: []
  };

  return (
    <Formik
      initialValues={initalValues}
      validationSchema={Yup.object().shape({
        campaignTitle: Yup.string()
          .min(3, 'Must be at least 3 characters')
          .max(255)
          .required('Required')
        // tags: Yup.array(),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setStatus({ success: true });
          setSubmitting(false);

          let temp: CreateCampaign = values;
          temp.campaignDescription.replace(/<[^>]*>?/gm, '');

          const campaign: CreateCampaign = { ...temp };

          dispatch(createCampaign(campaign));
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
            Campaign Description
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Proin tincidunt lacus sed ante efficitur efficitur. Quisque
              aliquam fringilla velit sit amet euismod.
            </Typography>
          </Box>
          <Box mt={2}>
            <TextField
              error={Boolean(touched.campaignTitle && errors.campaignTitle)}
              fullWidth
              helperText={touched.campaignTitle && errors.campaignTitle}
              label="Campaign name"
              name="campaignTitle"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.campaignTitle}
              variant="outlined"
            />
          </Box>
          <Box mt={2}>
            <Paper variant="outlined" component={Box}>
              <QuillEditor
                onChange={(value: string) =>
                  setFieldValue('campaignDescription', value)
                }
                value={values.campaignDescription}
                placeholder="Describe the purpose of the campagin"
                className={classes.editor}
              />
            </Paper>

            <Box mt={2}>
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

            <Box mt={2} display="flex" alignItems="center">
              <Box display="flex" width="50%">
                <TextField
                  label="Campaign hashtags"
                  name="hashtags"
                  fullWidth
                  value={hashtag}
                  onChange={event => setHashTags(event.target.value)}
                  variant="outlined"
                />
                <IconButton
                  // variant="contained"
                  className={classes.addTab}
                  onClick={() => {
                    if (!hashtag) {
                      return;
                    }

                    setFieldValue('hashtags', [...values.hashtags, hashtag]);
                    setHashTags('');
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
              {values.hashtags.map((tag, i) => (
                <Chip
                  variant="outlined"
                  key={i}
                  label={tag}
                  className={classes.tag}
                  onDelete={() => {
                    const newTags = values.hashtags.filter(t => t !== tag);

                    setFieldValue('hashtags', newTags);
                  }}
                />
              ))}
            </Box>
            {Boolean(touched.hashtags && errors.hashtags) && (
              <Box mt={2}>
                <FormHelperText error>{errors.hashtags}</FormHelperText>
              </Box>
            )}
          </Box>

          <Box mt={4} display="flex">
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
