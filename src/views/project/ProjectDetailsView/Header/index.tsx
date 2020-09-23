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
  Share
} from 'react-feather';
import { useParams } from 'react-router';
import useAuth from 'src/hooks/useAuth';
import { useSelector } from 'src/store';
import { Theme } from 'src/theme';
import { CampaignMock } from 'src/types/campaignmock';
import { Project } from 'src/types/project';
import ApplyModal from './ApplyModal';

interface HeaderProps {
  className?: string;
  project: Project;
  campaign: CampaignMock;
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

const Header: FC<HeaderProps> = ({ className, project, campaign, ...rest }) => {
  const classes = useStyles();
  const [isApplyModalOpen, setApplyModalOpen] = useState<boolean>(false);

  const handleApplyModalOpen = (): void => {
    setApplyModalOpen(true);
  };

  const handleApplyModalClose = (): void => {
    setApplyModalOpen(false);
  };

  const [isPublished, setIsPublished] = useState<boolean>(false);
  const { campaignTitle } = useSelector(state => state.campaign.createCampaign);
  const { endDate } = useSelector(state => state.campaign.completeCampaign);

  const { user } = useAuth();

  const { id } = useParams();

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
          {id == 2 ? campaignTitle : campaign.campaignTitle}
        </Typography>
        <Box
          mx={-2}
          display="flex"
          color="text.secondary"
          alignItems="center"
          flexWrap="wrap"
        >
          {user.tier === 'Company' ? (
            <div className={classes.badge}>
              <SvgIcon fontSize="small" className={classes.badgeIcon}>
                {isPublished ? <CheckIcon /> : <AlertIcon />}
              </SvgIcon>
              <Typography variant="body2" color="inherit" component="span">
                {isPublished ? 'Active' : 'Draft'}
              </Typography>
            </div>
          ) : (
            <div className={classes.badge}>
              <SvgIcon fontSize="small" className={classes.badgeIcon}>
                <CheckIcon />
              </SvgIcon>
              <Typography variant="body2" color="inherit" component="span">
                Active
              </Typography>
            </div>
          )}
          <div className={classes.badge}>
            <SvgIcon fontSize="small" className={classes.badgeIcon}>
              <CalendarIcon />
            </SvgIcon>
            <Typography variant="body2" color="inherit" component="span">
              {`Deadline ${moment(
                id == 2 ? endDate : campaign.endDate
              ).fromNow()}`}
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item>
        {/* <Button
          className={classes.action}
          startIcon={
            <SvgIcon fontSize="small">
              <ShareIcon />
            </SvgIcon>
          }
        >
          Share
        </Button> */}
        {user.tier === 'Company' && (
          <Button
            className={classes.action}
            onClick={() => setIsPublished(!isPublished)}
            variant="contained"
            color="secondary"
            startIcon={
              <SvgIcon fontSize="small">
                <Share />
              </SvgIcon>
            }
          >
            {!isPublished ? <>Publish Campaign</> : <>Unpublish Campaign</>}
          </Button>
        )}
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
