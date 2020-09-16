import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'src/store';
import { Theme } from 'src/theme';
import { Project } from 'src/types/project';
import getInitials from 'src/utils/getInitials';

interface MetadataProps {
  className?: string;
  project: Project;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    paddingTop: 0
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between'
  }
}));

const Metadata: FC<MetadataProps> = ({ className, project, ...rest }) => {
  const classes = useStyles();

  const campaign = useSelector(state => state.campaign);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        avatar={
          <Avatar
            alt="Author"
            component={RouterLink}
            src={project.author.avatar}
            to="#"
          >
            {getInitials(campaign.companyCampaign.companyName)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Link
            color="textPrimary"
            component={RouterLink}
            to="#"
            underline="none"
            variant="h6"
          >
            {campaign.companyCampaign.companyName}
          </Link>
        }
        title={
          <Typography display="block" variant="overline" color="textSecondary">
            Campaign Owner
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <List>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Deadline
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {moment(campaign.completeCampaign.endDate).format('DD MMM YYYY')}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Budget
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {numeral(campaign.createCampaign.campaignBudget).format(
                `${project.currency}0,0.00`
              )}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Last Update
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {moment(project.updatedAt).format('DD MMM YYYY')}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

Metadata.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  project: PropTypes.object.isRequired
};

export default Metadata;
