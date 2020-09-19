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
              About Blinkstars
            </Typography>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  Who is this for and how does it work?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  Blinkstars is a plattform where businesses and influencers can
                  find each other.
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  Does it cost anything?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  Influencers can use it for free. Companies need to pay for a
                  budget after creating a campaign.
                </Typography>
              </dd>
            </Box>
            <Box mt={6}>
              <dt>
                <Typography variant="h4" color="textPrimary">
                  Are you providing support for setting up a campaign?
                </Typography>
              </dt>
              <dd>
                <Typography variant="body1" color="textSecondary">
                  Yes, we offer email support for all our customers.
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
