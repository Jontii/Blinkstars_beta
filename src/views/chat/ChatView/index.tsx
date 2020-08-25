import { makeStyles } from '@material-ui/core';
import React, { FC, useEffect, useRef } from 'react';
import Page from 'src/components/Page';
import { getThreads } from 'src/slices/chat';
import { useDispatch } from 'src/store';
import { Theme } from 'src/theme';
import RecentThreads from './RecentThreads';
import Settings from './Settings';
import Thread from './Thread';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  sidebar: {
    backgroundColor: theme.palette.background.default,
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 300
  }
}));

const ChatView: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(getThreads());
  }, [dispatch]);

  return (
    <Page className={classes.root} title="Chat" ref={pageRef}>
      <div className={classes.sidebar}>
        <Settings />
        <RecentThreads />
      </div>
      <Thread />
    </Page>
  );
};

export default ChatView;
