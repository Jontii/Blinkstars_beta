import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import Page from 'src/components/Page';
import { Theme } from 'src/theme';
import LineChart from 'src/views/extra/charts/ApexChartsView/LineChart';
import CustomerActivity from './CustomerActivity';
import EarningsSegmentation from './EarningsSegmentation';
import Header from './Header';
import LatestOrders from './LatestOrders';
import Overview from './Overview';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const DashboardAlternativeView: FC = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard Alternative">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Overview />
          </Grid>
          <Grid item lg={8} xl={9} xs={12}>
            <LineChart />
          </Grid>

          {/* <Grid item lg={4} xl={3} xs={12}>
            <EarningsSegmentation version={1} />
          </Grid>
          <Grid item lg={4} xl={3} xs={12}>
            <EarningsSegmentation version={2} />
          </Grid> */}
          <Grid item lg={4} xl={3} xs={12}>
            <EarningsSegmentation version={3} />
          </Grid>
          <Grid item lg={8} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
          {/* <Grid item lg={8} xs={12}>
            <LatestOrders />
          </Grid> */}
          <Grid item lg={4} xl={3} xs={12}>
            <CustomerActivity />
          </Grid>
          {/* <Grid item lg={8} xs={12}>
            <MostProfitableProducts />
          </Grid> */}
          {/* <Grid item lg={3} xs={12}>
            <TopReferrals />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
};

export default DashboardAlternativeView;
