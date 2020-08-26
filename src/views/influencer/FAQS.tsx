import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Theme } from 'src/theme';

interface FAQSProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    }
  }
}));

const FAQS: FC<FAQSProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h1" color="textPrimary">
          Frequently asked questions
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid container spacing={3} component="dl">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="secondary">
              About Influencer
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  What is an influencer?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  We use Material-ui&apos;s hooks api as we think it’s the best
                  way of avoiding clutter.
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  How big of a influencer do I need to be?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  Yes, we have the Typescript version available for Standard
                  Plus and Extended license.
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  Do I need to own a company?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  Yes, we offer email support for all our customers &amp; even
                  skype meetings for our extended license customers.
                </Typography>
              </dd>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="secondary">
              Contact
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  Want to know more or have other questions?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  Contact us at{' '}
                  <Link href="mail:to blinkstars.com@gmail.com">
                    blinkstars.com@gmail.com
                  </Link>
                </Typography>
              </dd>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

FAQS.propTypes = {
  className: PropTypes.string
};

export default FAQS;
