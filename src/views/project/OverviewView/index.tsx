import { Box, Container, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import Page from 'src/components/Page';
import { Theme } from 'src/theme';
import Header from './Header';
import Notifications from './Notifications';
import Projects from './Projects';
import Statistics from './Statistics';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const OverviewView: FC = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Overview">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Statistics />
        </Box>
        <Box mt={6}>
          <Notifications />
        </Box>
        <Box mt={6}>
          <Projects />
        </Box>
      </Container>
    </Page>
  );
};

export default OverviewView;
