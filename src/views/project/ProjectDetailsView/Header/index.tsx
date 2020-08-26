import {
  Box,
  Button,
  Grid,
  makeStyles,
  SvgIcon,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import {
  AlertTriangle as AlertIcon,
  Calendar as CalendarIcon,
  Check as CheckIcon,
  Share2 as ShareIcon
} from 'react-feather';
import { Theme } from 'src/theme';
import { Project } from 'src/types/project';
import ApplyModal from './ApplyModal';

interface HeaderProps {
  className?: string;
  project: Project;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  badge: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2)
  },
  badgeIcon: {
    marginRight: theme.spacing(1)
  },
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}));

const Header: FC<HeaderProps> = ({ className, project, ...rest }) => {
  const classes = useStyles();
  const [isApplyModalOpen, setApplyModalOpen] = useState<boolean>(false);

  const handleApplyModalOpen = (): void => {
    setApplyModalOpen(true);
  };

  const handleApplyModalClose = (): void => {
    setApplyModalOpen(false);
  };

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Typography variant="h3" color="textPrimary">
          {project.title}
        </Typography>
        <Box
          mx={-2}
          display="flex"
          color="text.secondary"
          alignItems="center"
          flexWrap="wrap"
        >
          <div className={classes.badge}>
            <SvgIcon fontSize="small" className={classes.badgeIcon}>
              {project.isActive ? <CheckIcon /> : <AlertIcon />}
            </SvgIcon>
            <Typography variant="body2" color="inherit" component="span">
              {project.isActive ? 'Active' : 'Inactive'}
            </Typography>
          </div>
          <div className={classes.badge}>
            <SvgIcon fontSize="small" className={classes.badgeIcon}>
              <CalendarIcon />
            </SvgIcon>
            <Typography variant="body2" color="inherit" component="span">
              {`Deadline ${moment(project.endDate).fromNow()}`}
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item>
        <Button
          className={classes.action}
          startIcon={
            <SvgIcon fontSize="small">
              <ShareIcon />
            </SvgIcon>
          }
        >
          Share
        </Button>
        {/* <Button
          className={classes.action}
          onClick={handleApplyModalOpen}
          variant="contained"
          color="secondary"
          startIcon={
            <SvgIcon fontSize="small">
              <SendIcon />
            </SvgIcon>
          }
        >
          Apply for a role
        </Button> */}
        <ApplyModal
          author={project.author}
          onApply={handleApplyModalClose}
          onClose={handleApplyModalClose}
          open={isApplyModalOpen}
        />
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  project: PropTypes.object.isRequired
};

export default Header;
