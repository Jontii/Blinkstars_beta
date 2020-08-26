import {
  AppBar,
  Box,
  Button,
  Divider,
  Link,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'src/components/Logo';

interface TopBarProps {
  className?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 64
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
    },
    textDecoration: 'none'
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const TopBar: FC<TopBarProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        {/* <Hidden mdDown>
          <Typography variant="caption" color="textSecondary">
            Blinkstar
          </Typography>
        </Hidden> */}
        <Box flexGrow={1} />
        <Link className={classes.link} component={RouterLink} to="/login">
          <Typography color="primary" variant="body2">
            Login
          </Typography>
        </Link>
        <Divider className={classes.divider} />
        <Button
          color="primary"
          component={RouterLink}
          to="/register"
          variant="contained"
          size="small"
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
