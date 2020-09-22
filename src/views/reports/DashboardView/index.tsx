import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import Page from 'src/components/Page';
import { THEMES } from 'src/constants';
import useAuth from 'src/hooks/useAuth';
import useSettings from 'src/hooks/useSettings';
import { Theme } from 'src/theme';
import Header from './Header';
import LatestProjects from './LatestProjects';
import NewProjects from './NewProjects';
import RoiPerCustomer from './RoiPerCustomer';
import TodaysMoney from './TodaysMoney';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const DashboardView: FC = () => {
  const classes = useStyles();

  const { saveSettings } = useSettings();
  const { user } = useAuth();

  useEffect(() => {
    if (user.tier === 'Company') {
      saveSettings({ theme: THEMES.LIGHT_COMPANY });
    } else {
      saveSettings({ theme: THEMES.LIGHT });
    }
  }, []);

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={12}>
            <TodaysMoney />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <NewProjects />
          </Grid>
          {/* <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <SystemHealth />
          </Grid> */}
          <Grid item lg={3} sm={6} xs={12}>
            <RoiPerCustomer />
          </Grid>
          {/* <Grid
            item
            lg={3}
            xs={12}
          >
            <RealTime />
          </Grid> */}
          {/* <Grid item lg={9} xs={12}>
            <PerformanceOverTime />
          </Grid> */}
          {/* <Grid
            item
            lg={5}
            xl={4}
            xs={12}
          >
            <TeamTasks />
          </Grid> */}
          <Grid item lg={9} xs={12}>
            <LatestProjects showOnlyFirst />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DashboardView;
