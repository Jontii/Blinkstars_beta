import { makeStyles } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import Page from 'src/components/Page';
import { THEMES } from 'src/constants';
import useSettings from 'src/hooks/useSettings';
import FAQS from './FAQS';
import Hero from './Hero';

const useStyles = makeStyles(() => ({
  root: {}
}));

const HomeView: FC = () => {
  const classes = useStyles();

  const { saveSettings } = useSettings();

  useEffect(() => {
    saveSettings({ theme: THEMES.LIGHT });
  }, []);

  return (
    <Page className={classes.root} title="Home">
      <Hero />
      <FAQS />
    </Page>
  );
};

export default HomeView;
