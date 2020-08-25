import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import Page from 'src/components/Page';
import FAQS from './FAQS';
import Features from './Features';
import Hero from './Hero';
import Testimonials from './Testimonials';

const useStyles = makeStyles(() => ({
  root: {}
}));

const HomeView: FC = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Hero />
    </Page>
  );
};

export default HomeView;
