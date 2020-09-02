import { Card, Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import Label from 'src/components/Label';
import { Theme } from 'src/theme';

interface OverviewProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

const Overview: FC<OverviewProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const overview = {
    income: '32 213',
    expanses: '2334',
    profit: '9',
    subscriptions: '7'
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Grid alignItems="center" container justify="space-between">
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Total Reactions
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="textPrimary">
              {overview.income}
            </Typography>
            <Label className={classes.label} color="success">
              +22%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Total Shares
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="textPrimary">
              {overview.expanses}
            </Typography>
            <Label className={classes.label} color="success">
              +12%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Click Through Rate
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="textPrimary">
              {overview.profit}%
            </Typography>
            <Label className={classes.label} color="success">
              +6%
            </Label>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Engagement Rate
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="textPrimary">
              {overview.subscriptions}%
            </Typography>
            <Label className={classes.label} color="error">
              -1%
            </Label>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

Overview.propTypes = {
  className: PropTypes.string
};

export default Overview;
