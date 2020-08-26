import {
  Avatar,
  Box,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Theme } from 'src/theme';

interface TestimonialsProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Testimonials: FC<TestimonialsProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          &quot;Our platform matches you with businesses.
          <br />
          Time to start influence.&quot;
        </Typography>
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          <Avatar src={`${process.env.PUBLIC_URL}/static/home/olivier.png`} />
          <Box ml={2}>
            <Typography variant="body1" color="textPrimary">
              Team Blinkstar
              <Typography
                color="textSecondary"
                display="inline"
                component="span"
              >
                , creator of Blinkstar.com
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string
};

export default Testimonials;
