import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from 'src/theme';

interface CTAProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  browseButton: {
    marginLeft: theme.spacing(2)
  }
}));

const CTA: FC<CTAProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          Ready to explore the platform?
        </Typography>
        <Typography variant="h1" align="center" color="secondary">
          Join now and explore all the possibilities of B2B
        </Typography>
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          <Button
            color="secondary"
            component={RouterLink}
            to="/register"
            variant="contained"
          >
            Register here
          </Button>
        </Box>
      </Container>
    </div>
  );
};

CTA.propTypes = {
  className: PropTypes.string
};

export default CTA;
