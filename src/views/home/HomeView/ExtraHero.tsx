import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import React, { FC } from 'react';
import { Theme } from 'src/theme';

interface HeroProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 100,
    paddingBottom: 100,
    [theme.breakpoints.down('md')]: {
      paddingTop: 30,
      paddingBottom: 30
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  image: {
    // perspectiveOrigin: 'left center',
    // transformStyle: 'preserve-3d',
    // perspective: 1500,
    // '& > img': {
    //   maxWidth: '90%',
    //   height: 'auto',
    //   transform: 'rotateY(-35deg) rotateX(15deg)',
    //   backfaceVisibility: 'hidden',
    //   boxShadow: theme.shadows[16]
    // }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  }
}));

const HeroExtra: FC<HeroProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Box position="relative">
              <div className={classes.image}>
                <img
                  alt="Presentation"
                  src={`${process.env.PUBLIC_URL}/static/images/undraw_growth_analytics_8btt.svg`}
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography variant="overline" color="secondary">
                Introducing
              </Typography>
              <Typography variant="h1" color="textPrimary">
                B2B
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" color="textSecondary">
                  Something how B2B is unique and will make it all grow....
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroExtra;
