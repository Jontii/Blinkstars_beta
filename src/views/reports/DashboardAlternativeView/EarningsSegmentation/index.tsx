import {
  Box,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import GenericMoreButton from 'src/components/GenericMoreButton';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import axios from 'src/utils/axios';
import Chart from './Chart';

interface EarningsSegmentationProps {
  className?: string;
  version: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  item: {
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
}));

const EarningsSegmentation: FC<EarningsSegmentationProps> = ({
  className,
  version,
  ...rest
}) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [earnings, setEarnings] = useState<any>(null);

  const getEarnings = useCallback(async () => {
    try {
      if (version === 1) {
        const response = await axios.get('/api/reports/earnings');
        if (isMountedRef.current) {
          setEarnings(response.data.earnings);
        }
      } else if (version === 2) {
        const response = await axios.get('/api/reports/earnings2');
        if (isMountedRef.current) {
          setEarnings(response.data.earnings);
        }
      } else if (version === 3) {
        const response = await axios.get('/api/reports/earnings3');
        if (isMountedRef.current) {
          setEarnings(response.data.earnings);
        }
      } else {
        const response = await axios.get('/api/reports/earnings');
        if (isMountedRef.current) {
          setEarnings(response.data.earnings);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getEarnings();
  }, [getEarnings]);

  if (!earnings) {
    return null;
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Geographics" />
      <Divider />
      <Box p={3} position="relative" minHeight={320}>
        <Chart data={earnings} version={version} />
      </Box>
      <Divider />
      <Box display="flex">
        {earnings.labels.map((label: string, i: number) => (
          <div key={label} className={classes.item}>
            <Typography variant="h4" color="textPrimary">
              {version === 3 ? (
                <>{earnings.datasets[0].data[i]}%</>
              ) : (
                <>{earnings.datasets[0].data[i]}</>
              )}
            </Typography>
            <Typography variant="overline" color="textSecondary">
              {label}
            </Typography>
          </div>
        ))}
      </Box>
    </Card>
  );
};

EarningsSegmentation.propTypes = {
  className: PropTypes.string
};

export default EarningsSegmentation;
