import { makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Theme } from 'src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    '& > a': {
      color: theme.palette.secondary.main
    }
  }
}));

const Paragraph: FC = props => {
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      color="textPrimary"
      className={classes.root}
      {...props}
    />
  );
};

export default Paragraph;
