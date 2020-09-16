import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormHelperText,
  IconButton,
  makeStyles,
  Slider,
  SvgIcon,
  TextField,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { Formik } from 'formik';
import React, { FC, useState } from 'react';
import { Plus as PlusIcon } from 'react-feather';
import { influencerCampaign } from 'src/slices/campaign';
import { useDispatch } from 'src/store';
import * as Yup from 'yup';
import { InfluencerCampaign } from './CampaignTypes';

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
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  top: {
    // color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0
  },
  circle: {
    strokeLinecap: 'round'
  }
}));

interface ProjectInfluencersProps {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}

const ProjectInfluencers: FC<ProjectInfluencersProps> = ({
  className,
  onBack,
  onNext,
  ...rest
}) => {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [roleTag, setRoleTag] = useState('');
  const [countryTag, setCountryTag] = useState('');
  const [progressValue, setProgressValue] = useState(60);
  const [value, setValue] = useState(5000);
  const dispatch = useDispatch();

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
      label: '10 000 +'
    }
  ];

  function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }

  function valuetext(value) {
    return `${value}°C`;
  }

  interface IProgress {
    value: number;
  }

  const CircularProgressWithLabel: FC<IProgress> = ({ value }) => {
    const classes = useStyles();

    return (
      <Box position="relative" display="inline-flex" mt={1}>
        <CircularProgress
          variant="static"
          className={classes.bottom}
          size={'6rem'}
          thickness={4}
          // {...props}
          value={100}
        />
        <CircularProgress
          variant="static"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle
          }}
          size={'6rem'}
          color="primary"
          thickness={4}
          value={30}
          // {...props}
        />

        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h4"
            component="div"
            color="textPrimary"
          >{`${Math.round(value)}%`}</Typography>
        </Box>
      </Box>
    );
  };

  const initialValues: InfluencerCampaign = {
    roleTags: [],
    countryTags: [],
    value: 5000
  };

  return (
    <Formik
      initialValues={initialValues}
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

          const campaign: InfluencerCampaign = { ...values };

          dispatch(influencerCampaign(campaign));

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
            Pick your influencer network criteria
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
              name="countryTags"
              value={countryTag}
              onChange={event => setCountryTag(event.target.value)}
              variant="outlined"
            />
            <IconButton
              // variant="contained"
              className={classes.addTab}
              onClick={() => {
                if (!countryTag) {
                  return;
                }

                setFieldValue('countryTags', [
                  ...values.countryTags,
                  countryTag
                ]);
                setCountryTag('');
              }}
            >
              <SvgIcon>
                <PlusIcon />
              </SvgIcon>
            </IconButton>
          </Box>
          <Box mt={2}>
            {values.countryTags.map((tag, i) => (
              <Chip
                variant="outlined"
                key={i}
                label={tag}
                className={classes.tag}
                onDelete={() => {
                  const newTags = values.countryTags.filter(t => t !== tag);

                  setFieldValue('countryTags', newTags);
                }}
              />
            ))}
          </Box>
          {Boolean(touched.countryTags && errors.countryTags) && (
            <Box mt={2}>
              <FormHelperText error>{errors.countryTags}</FormHelperText>
            </Box>
          )}

          <Box mt={3} display="flex">
            <TextField
              label="Role"
              fullWidth
              name="roleTags"
              value={roleTag}
              onChange={event => setRoleTag(event.target.value)}
              variant="outlined"
            />
            <IconButton
              // variant="contained"
              className={classes.addTab}
              onClick={() => {
                if (!roleTag) {
                  return;
                }

                setFieldValue('roleTags', [...values.roleTags, roleTag]);
                setRoleTag('');
              }}
            >
              <SvgIcon>
                <PlusIcon />
              </SvgIcon>
            </IconButton>
          </Box>
          <Box mt={2}>
            {values.roleTags.map((tag, i) => (
              <Chip
                variant="outlined"
                key={i}
                label={tag}
                className={classes.tag}
                onDelete={() => {
                  const newTags = values.roleTags.filter(t => t !== tag);

                  setFieldValue('roleTags', newTags);
                }}
              />
            ))}
          </Box>
          {Boolean(touched.roleTags && errors.roleTags) && (
            <Box mt={2}>
              <FormHelperText error>{errors.roleTags}</FormHelperText>
            </Box>
          )}

          <Box width={'80%'} mt={6}>
            <Typography id="discrete-slider" gutterBottom>
              Network connections
            </Typography>
            <Slider
              defaultValue={5000}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1000}
              min={1000}
              max={10000}
              // value={value}
              onChange={(e, value) => {
                setFieldValue('value', [value]);
              }}
              // onChange={(e, value) =>
              //   setProgressValue(
              //     typeof value === 'number' ? progressValue + value / 100 : 10
              //   )
              // }
              valueLabelDisplay="auto"
              marks={marks}
            />
          </Box>

          {error && (
            <Box mt={2}>
              <FormHelperText error>{FormHelperText}</FormHelperText>
            </Box>
          )}

          <Box width={'80%'} mt={6}>
            <Typography id="discrete-slider" gutterBottom>
              Influencer network match
            </Typography>
            <CircularProgressWithLabel value={progressValue} />
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

export default ProjectInfluencers;
