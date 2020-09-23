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
import useAuth from 'src/hooks/useAuth';
import { useSelector } from 'src/store';
import { Theme } from 'src/theme';
import { CampaignMock } from 'src/types/campaignmock';
import { Project } from 'src/types/project';

interface BriefProps {
  className?: string;
  project: Project;
  campaign: CampaignMock;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  markdown: {
    fontFamily: theme.typography.fontFamily,
    paddingRight: theme.spacing(2)
  },
  tag: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));

const Brief: FC<BriefProps> = ({ className, project, campaign, ...rest }) => {
  //TODO: FIX Replace with br
  //TODO: Think abnout how to fix this with state and all
  const classes = useStyles();
  const campaignState = useSelector(state => state.campaign);
  const { user } = useAuth();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Campaign title
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {campaign.campaignTitle}
            </Typography>
          </Grid> */}
          <Grid item xs={12} md={12}>
            <Box mt={1}>
              <Typography variant="subtitle2" color="textSecondary">
                Description
              </Typography>

              <p
                className={classes.markdown}
                dangerouslySetInnerHTML={{
                  __html: campaign.campaignDescription
                }}
              />
              {campaign.companyName !== 'Klarna' && (
                <p
                  className={classes.markdown}
                  dangerouslySetInnerHTML={{
                    __html: campaign.influencerText
                  }}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <Box display="flex">
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    Campaign Hashtags
                  </Typography>
                  <Box mt={1}>
                    {campaign.hashtags.map(tag => (
                      <Chip
                        key={tag}
                        className={classes.tag}
                        variant="outlined"
                        label={tag}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    Campaign Url
                  </Typography>
                  <Box mt={1}>
                    <Link href={campaign.campaignUrl}>
                      {campaign.campaignUrl}
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            {user.tier === 'Company' && (
              <Box display="flex">
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Countries
                    </Typography>
                    <Box mt={1}>
                      {campaign.countryTags &&
                        campaign.countryTags.map(tag => (
                          <Chip
                            key={tag}
                            className={classes.tag}
                            variant="outlined"
                            label={tag}
                          />
                        ))}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Roles
                    </Typography>
                    <Box mt={1}>
                      {campaign.roleTags &&
                        campaign.roleTags.map(tag => (
                          <Chip
                            key={tag}
                            className={classes.tag}
                            variant="outlined"
                            label={tag}
                          />
                        ))}
                    </Box>
                  </Box>
                </Grid>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={10}>
            {user.tier === 'Company' && (
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  Influencer Network Critieria
                </Typography>
                <Box mt={1}>{campaign.value}</Box>
              </Box>
            )}
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
