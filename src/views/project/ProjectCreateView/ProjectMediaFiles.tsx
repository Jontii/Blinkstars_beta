import {
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { Formik } from 'formik';
import React, { FC, useState } from 'react';
import FilesDropzone from 'src/components/FilesDropzone';
import * as Yup from 'yup';

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

const ProjectMediaFiles: FC<ProjectCompanyProps> = ({
  className,
  onNext,
  onBack,
  ...rest
}) => {
  const classes = useStyles();
  const [content, setContent] = useState('');

  return (
    <Formik
      initialValues={{
        projectName: '',
        tags: ['Full-Time']
      }}
      validationSchema={Yup.object().shape({})}
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
        touched,
        values
      }) => (
        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Typography variant="h3" color="textPrimary">
            Campaign Media
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Here you can upload any files you wish the influencer to share or
              learn from.
            </Typography>
          </Box>
          <Box mt={4}>
            <Card>
              <CardContent>
                <FilesDropzone />
              </CardContent>
            </Card>
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

export default ProjectMediaFiles;
