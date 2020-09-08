import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  makeStyles,
  SvgIcon,
  Toolbar
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Menu as MenuIcon } from 'react-feather';
import { Link as RouterLink } from 'react-router-dom';
import { THEMES } from 'src/constants';
import { Theme } from 'src/theme';
import Account from './Account';
import Notifications from './Notifications';
import Settings from './Settings';

interface TopBarProps {
  className?: string;
  onMobileNavOpen?: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...(theme.name === THEMES.LIGHT
      ? {
          boxShadow: 'none',
          backgroundColor: theme.palette.primary.main
        }
      : {}),
    ...(theme.name === THEMES.ONE_DARK
      ? {
          backgroundColor: theme.palette.background.default
        }
      : {})
  },
  toolbar: {
    minHeight: 64
  }
}));

const TopBar: FC<TopBarProps> = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/app/reports/dashboard">
            <img
              alt="Logo"
              style={{ height: '42px' }}
              src={`${process.env.PUBLIC_URL}/static/home/Btxt.svg`}
            />
          </RouterLink>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        {/* <Search />
        <Contacts /> */}
        <Notifications />
        <Settings />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
  onMobileNavOpen: () => {}
};

export default TopBar;
