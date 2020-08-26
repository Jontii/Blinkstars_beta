import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import Page from 'src/components/Page';
import FAQS from './FAQS';
import Hero from './Hero';

const useStyles = makeStyles(() => ({
  root: {}
}));

const HomeView: FC = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Hero />
      <FAQS />
    </Page>
  );
};

export default HomeView;
