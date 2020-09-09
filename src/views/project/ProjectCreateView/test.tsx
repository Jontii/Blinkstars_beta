/* eslint-disable react/jsx-indent */
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  colors,
  Container,
  Grid,
  Link,
  makeStyles,
  Paper,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  withStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Star as StarIcon } from 'react-feather';
import { Link as RouterLink } from 'react-router-dom';
import Page from 'src/components/Page';
import ProjectCampagin from './ProjectCampaign';
import ProjectCampignComplete from './ProjectCampignComplete';
import ProjectCompany from './ProjectCompany';
import ProjectInfluencers from './ProjectInfluencers';
import ProjectMediaFiles from './ProjectMediaFiles';

const steps = [
  {
    label: 'Campaign Details',
    icon: 1
  },
  {
    label: 'Campaign Media',
    icon: 2
  },
  {
    label: 'About The Company',
    icon: 3
  },
  {
    label: 'Influencer Network Criteria',
    icon: 4
  },
  {
    label: 'Complete Campaign',
    icon: 5
  }
];

const CustomStepConnector = withStyles(theme => ({
  vertical: {
    marginLeft: 19,
    padding: 0
  },
  line: {
    borderColor: theme.palette.divider
  }
}))(StepConnector);

const useCustomStepIconStyles = makeStyles(theme => ({
  root: {},
  active: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[10]
  },
  completed: {
    backgroundColor: theme.palette.secondary.main
  }
}));

function CustomStepIcon({ active, completed, icon }) {
  const classes = useCustomStepIconStyles();

  const Icon = steps[icon - 1].icon;

  return (
    <Avatar
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {Icon}
    </Avatar>
  );
}

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.number
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  avatar: {
    backgroundColor: colors.red[600]
  }
}));

function ProjectCreateView() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(4);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <Page className={classes.root} title="Create Campaign">
      <Container maxWidth="lg">
        <Box mb={3}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              variant="body1"
              color="inherit"
              to="/app"
              component={RouterLink}
            >
              Dashboard
            </Link>
            <Typography variant="body1" color="textPrimary">
              Create campaign
            </Typography>
          </Breadcrumbs>
          <Typography variant="h3" color="textPrimary">
            Create Campaign Wizard
          </Typography>
        </Box>
        {!completed ? (
          <Paper>
            <Grid container>
              <Grid item xs={12} md={3}>
                <Stepper
                  activeStep={activeStep}
                  connector={<CustomStepConnector />}
                  orientation="vertical"
                  component={Box}
                  // bgcolor="transparent"
                >
                  {steps.map(step => (
                    <Step key={step.label}>
                      <StepLabel StepIconComponent={CustomStepIcon}>
                        {step.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
              <Grid item xs={12} md={9}>
                <Box p={3}>
                  {activeStep === 0 && <ProjectCampagin onNext={handleNext} />}
                  {activeStep === 1 && (
                    <ProjectMediaFiles
                      onBack={handleBack}
                      onNext={handleNext}
                    />
                  )}
                  {activeStep === 2 && (
                    <ProjectCompany onBack={handleBack} onNext={handleNext} />
                  )}
                  {activeStep === 3 && (
                    <ProjectInfluencers
                      onBack={handleBack}
                      onNext={handleNext}
                    />
                  )}
                  {activeStep === 4 && (
                    <ProjectCampignComplete
                      onBack={handleBack}
                      onComplete={handleComplete}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Card>
            <CardContent>
              <Box maxWidth={450} mx="auto">
                <Box display="flex" justifyContent="center">
                  <Avatar className={classes.avatar}>
                    <StarIcon />
                  </Avatar>
                </Box>
                <Box mt={2}>
                  <Typography variant="h3" color="textPrimary" align="center">
                    You are all done!
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                  >
                    Your campaign has been saved as a draft and you need to
                    publish it for it to be public.
                  </Typography>
                </Box>
                <Box mt={2} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    component={RouterLink}
                    to="/app/projects/1"
                  >
                    View your campaign
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}
      </Container>
    </Page>
  );
}

export default ProjectCreateView;
