import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  colors,
  Divider,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import {
  Briefcase as BriefcaseIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  Plus as PlusIcon
} from 'react-feather';
import { Theme } from 'src/theme';
import { Profile } from 'src/types/social';

interface AboutProps {
  className?: string;
  profile: Profile;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  jobAvatar: {
    backgroundColor: theme.palette.secondary.main
  },
  cityAvatar: {
    backgroundColor: colors.red[600]
  }
}));

const About: FC<AboutProps> = ({ className, profile, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <CardHeader title="Profile Progress" />
        <Divider />
        <CardContent>
          <LinearProgress
            variant="determinate"
            value={profile.profileProgress}
          />
          <Box mt={2}>
            <Typography variant="subtitle2" color="textSecondary">
              50% Set Up Complete
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box mt={3}>
        <Card>
          <CardHeader title="About" />
          <Divider />
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              &quot;
              {profile.quote}
              &quot;
            </Typography>
            <List>
              <ListItem disableGutters divider>
                <ListItemAvatar>
                  <Avatar className={classes.jobAvatar}>
                    <BriefcaseIcon size="22" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" color="textPrimary">
                      {profile.currentJob.title} at{' '}
                      <Link variant="subtitle2" color="textPrimary" href="#">
                        {profile.currentJob.company}
                      </Link>
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="textSecondary">
                      Past:
                      {profile.previousJob.title}{' '}
                      <Link variant="caption" color="textSecondary" href="#">
                        {profile.previousJob.company}
                      </Link>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters divider>
                <ListItemAvatar>
                  <Avatar className={classes.cityAvatar}>
                    <PlusIcon size="22" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Add school or collage"
                  primaryTypographyProps={{
                    variant: 'body2',
                    color: 'textSecondary'
                  }}
                />
              </ListItem>
              <ListItem disableGutters divider>
                <ListItemAvatar>
                  <Avatar className={classes.cityAvatar}>
                    <HomeIcon size="22" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" color="textPrimary">
                      Lives in{' '}
                      <Link variant="subtitle2" color="textPrimary" href="#">
                        {profile.currentCity}
                      </Link>
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="textSecondary">
                      Originally from{' '}
                      <Link variant="caption" color="textSecondary" href="#">
                        {profile.originCity}
                      </Link>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters divider>
                <ListItemAvatar>
                  <Avatar className={classes.cityAvatar}>
                    <MailIcon size="22" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={profile.email}
                  primaryTypographyProps={{
                    variant: 'body2',
                    color: 'textPrimary'
                  }}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  profile: PropTypes.object.isRequired
};

export default About;
