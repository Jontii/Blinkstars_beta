import { Box, Container, makeStyles } from '@material-ui/core';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Page from 'src/components/Page';
import PostAdd from 'src/components/PostAdd';
import PostCard from 'src/components/PostCard';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import { Post } from 'src/types/social';
import axios from 'src/utils/axios';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const SocialFeedView: FC = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get<{ posts: Post[] }>('/api/social/feed');

      if (isMountedRef.current) {
        setPosts(response.data.posts);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Page className={classes.root} title="Social Feed">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <PostAdd />
        </Box>
        {posts.map(post => (
          <Box mt={3} key={post.id}>
            <PostCard post={post} />
          </Box>
        ))}
      </Container>
    </Page>
  );
};

export default SocialFeedView;
