import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Theme } from 'src/theme';

interface FeaturesProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

const Features: FC<FeaturesProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="secondary"
          align="center"
        >
          Explore Blinkstars
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          Not just a pretty face
        </Typography>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>01</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Complete User Flows
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus fermentum massa, in mattis diam euismod ac. Aliquam lobortis magna et turpis pulvinar rutrum. Cras ac dolor elit. Vivamus nisi tellus, vestibulum sed maximus in, vehicula sed velit.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>02</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Support for Plugins
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus fermentum massa, in mattis diam euismod ac. Aliquam lobortis magna et turpis pulvinar rutrum. Cras ac dolor elit. Vivamus nisi tellus, vestibulum sed maximus in, vehicula sed velit.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>03</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Designers, we got you
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus fermentum massa, in mattis diam euismod ac. Aliquam lobortis magna et turpis pulvinar rutrum. Cras ac dolor elit. Vivamus nisi tellus, vestibulum sed maximus in, vehicula sed velit.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string
};

export default Features;
