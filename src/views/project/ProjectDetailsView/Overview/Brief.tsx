import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import Markdown from 'react-markdown/with-html';
import { useSelector } from 'src/store';
import { Theme } from 'src/theme';
import { Project } from 'src/types/project';

interface BriefProps {
  className?: string;
  project: Project;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  markdown: {
    fontFamily: theme.typography.fontFamily,
    '& p': {
      marginBottom: theme.spacing(2)
    }
  },
  tag: {
    marginRight: theme.spacing(1)
  }
}));

const Brief: FC<BriefProps> = ({ className, project, ...rest }) => {
  //TODO: FIX Replace with br

  const classes = useStyles();
  const campaign = useSelector(state => state.campaign);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Project Name
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {campaign.createCampaign.campaignTitle}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box mt={1}>
              <Typography variant="subtitle2" color="textSecondary">
                Description
              </Typography>
              <Markdown
                source={campaign.createCampaign.campaignDescription.replace(
                  /<[^>]*>?/gm,
                  ''
                )}
                className={classes.markdown}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="space-between">
              <Box mt={1}>
                <Typography variant="subtitle2" color="textSecondary">
                  Campaign Hashtags
                </Typography>
                <Box mt={1}>
                  {campaign.createCampaign.hashtags.map(tag => (
                    <Chip
                      key={tag}
                      className={classes.tag}
                      variant="outlined"
                      label={tag}
                    />
                  ))}
                </Box>
              </Box>
              <Box mt={3}>
                <Typography variant="subtitle2" color="textSecondary">
                  Campaign Url
                </Typography>
                <Box mt={1}>
                  <Link href={campaign.createCampaign.campaignUrl}>
                    {campaign.createCampaign.campaignUrl}
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt={3}>
                <Typography variant="subtitle2" color="textSecondary">
                  Countries
                </Typography>
                <Box mt={1}>
                  {campaign.influencerCampaign.countryTags.map(tag => (
                    <Chip
                      key={tag}
                      className={classes.tag}
                      variant="outlined"
                      label={tag}
                    />
                  ))}
                </Box>
              </Box>
              <Box mt={3}>
                <Typography variant="subtitle2" color="textSecondary">
                  Roles
                </Typography>
                <Box mt={1}>
                  {campaign.influencerCampaign.roleTags.map(tag => (
                    <Chip
                      key={tag}
                      className={classes.tag}
                      variant="outlined"
                      label={tag}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box mt={3}>
              <Typography variant="subtitle2" color="textSecondary">
                Influencer network
              </Typography>
              <Box mt={1}>{campaign.influencerCampaign.value}</Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Brief.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  project: PropTypes.object.isRequired
};

export default Brief;
