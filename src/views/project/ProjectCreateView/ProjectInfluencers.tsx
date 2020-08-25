import {
  Box,
  Button,
  Chip,
  FormHelperText,
  IconButton,
  makeStyles,
  Slider,
  SvgIcon,
  TextField,
  Typography
} from '@material-ui/core';
import Axios from 'axios';
import clsx from 'clsx';
import { Formik } from 'formik';
import React, { FC, useState } from 'react';
import { Plus as PlusIcon } from 'react-feather';
import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
  root: {},
  editor: {
    '& .ql-editor': {
      height: 400
    }
  },
  addTab: {
    marginLeft: theme.spacing(2)
  },
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}));

interface ProjectInfluencersProps {
  className?: string;
  onComplete?: () => void;
  onBack?: () => void;
}

const ProjectInfluencers: FC<ProjectInfluencersProps> = ({
  className,
  onBack,
  onComplete,
  ...rest
}) => {
  const classes = useStyles();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [tag, setTag] = useState('');

  const marks = [
    {
      value: 1000,
      label: '1000'
    },
    {
      value: 2000,
      label: '2000'
    },
    {
      value: 3000,
      label: '3000'
    },
    {
      value: 4000,
      label: '4000'
    },
    {
      value: 5000,
      label: '5000'
    },
    {
      value: 6000,
      label: '6000'
    },
    {
      value: 7000,
      label: '7000'
    },
    {
      value: 8000,
      label: '8000'
    },
    {
      value: 9000,
      label: '9000'
    },
    {
      value: 10000,
      label: '10000'
    }
  ];

  function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Formik
      initialValues={{
        projectName: '',
        campaignUrl: 'https://...',
        tags: ['tag1', 'tag2', 'tag3']
      }}
      validationSchema={Yup.object().shape({
        // projectName: Yup.string()
        //   .min(3, 'Must be at least 3 characters')
        //   .max(255)
        //   .required('Required'),
        // tags: Yup.array(),
        // startDate: Yup.date(),
        // endDate: Yup.date()
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setSubmitting(false);

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
            Please select one option
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Proin tincidunt lacus sed ante efficitur efficitur. Quisque
              aliquam fringilla velit sit amet euismod.
            </Typography>
          </Box>
          <Box mt={3} display="flex">
            <TextField
              label="Country"
              fullWidth
              name="tags"
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

          <Box mt={3} display="flex">
            <TextField
              label="Role"
              fullWidth
              name="tags"
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

          <Box width={'80%'} mt={8}>
            <Typography id="discrete-slider" gutterBottom>
              Followers
            </Typography>
            <Slider
              defaultValue={5000}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1000}
              min={1000}
              max={10000}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </Box>

          {error && (
            <Box mt={2}>
              <FormHelperText error>{FormHelperText}</FormHelperText>
            </Box>
          )}
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
              Complete
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ProjectInfluencers;
