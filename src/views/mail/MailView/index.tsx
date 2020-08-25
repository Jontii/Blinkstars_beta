import { makeStyles } from '@material-ui/core';
import React, { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Page from 'src/components/Page';
import { getLabels } from 'src/slices/mail';
import { useDispatch } from 'src/store';
import Compose from './Compose';
import MailDetails from './MailDetails';
import MailList from './MailList';
import Sidebar from './Sidebar';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative'
  }
}));

const MailView: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { mailId } = useParams();
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Page className={classes.root} title="Mail" ref={pageRef}>
      <Sidebar containerRef={pageRef} />
      {mailId ? <MailDetails /> : <MailList />}
      <Compose />
    </Page>
  );
};

export default MailView;
