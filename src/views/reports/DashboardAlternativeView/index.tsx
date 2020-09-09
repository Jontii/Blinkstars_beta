import {
  Box,
  Collapse,
  Container,
  Grid,
  IconButton,
  makeStyles,
  SvgIcon,
  Typography
} from '@material-ui/core';
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { ChevronRight } from 'react-feather';
import Page from 'src/components/Page';
import { THEMES } from 'src/constants';
import useAuth from 'src/hooks/useAuth';
import useSettings from 'src/hooks/useSettings';
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
  },
  root2: {
    '& + &': {
      marginTop: theme.spacing(4)
    },
    '&:not(:first-child)': {
      marginTop: theme.spacing(2)
    }
  },
  chevron: {
    marginLeft: 8,
    transform: 'none',
    transition: 'transform 100ms ease-out',
    color: theme.palette.primary.main
  },
  chevronDown: {
    transform: 'rotate(90deg)'
  }
}));

const DashboardAlternativeView: FC = () => {
  const classes = useStyles();

  const [showProp, setShowProp] = useState<boolean>(true);

  const { saveSettings } = useSettings();
  const { user } = useAuth();

  useEffect(() => {
    if (user.tier === 'Company') {
      saveSettings({ theme: THEMES.UNICORN });
    } else {
      saveSettings({ theme: THEMES.LIGHT });
    }
  }, []);

  return (
    <Page className={classes.root} title="Dashboard Alternative">
      <Container maxWidth={false}>
        <Header />
        <Box className={classes.root2}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
              onClick={() => setShowProp(!showProp)}
            >
              <Typography color="primary" variant="h4">
                Active Campaign
              </Typography>

              <IconButton
                className={classNames(classes.chevron, {
                  [classes.chevronDown]: showProp
                })}
              >
                <SvgIcon fontSize="small">
                  <ChevronRight />
                </SvgIcon>
              </IconButton>
            </Box>
          </Box>
          <Collapse in={showProp}>
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
          </Collapse>
        </Box>
      </Container>
    </Page>
  );
};

export default DashboardAlternativeView;
