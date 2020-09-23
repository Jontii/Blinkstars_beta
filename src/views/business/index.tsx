import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import Page from 'src/components/Page';
import FAQS from './FAQS';
import Features from './Features';
import Hero from './Hero';

const useStyles = makeStyles(() => ({
  root: {}
}));

const BusinessView: FC = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Business">
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <FAQS />
    </Page>
  );
};

export default BusinessView;
