import { Box, Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'src/store';
import { CampaignMock } from 'src/types/campaignmock';
import { Project } from 'src/types/project';
import Brief from './Brief';
import Files from './Files';
import Members from './Members';
import Metadata from './Metadata';

interface OverviewProps {
  className?: string;
  project: Project;
  campaign: CampaignMock;
  handleTabsChange: (event: ChangeEvent<{}>, value: string) => void;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Overview: FC<OverviewProps> = ({
  className,
  project,
  campaign,
  handleTabsChange,
  ...rest
}) => {
  const classes = useStyles();
  const { id } = useParams();
  const [overrideCamp, setOverrideCamp] = useState<CampaignMock>(campaign);

  const c = useSelector(state => state.campaign);

  useEffect(() => {
    if (id == 2) {
      const overrideCampaign: CampaignMock = {
        campaignTitle: c.createCampaign.campaignTitle,
        campaignDescription: c.createCampaign.campaignDescription,
        campaignUrl: c.createCampaign.campaignUrl,
        companyName: c.companyCampaign.companyName,
        companyAvatar: campaign.companyAvatar,
        campaignBudget: c.createCampaign.campaignBudget,
        hashtags: c.createCampaign.hashtags,
        roleTags: c.influencerCampaign.roleTags,
        countryTags: c.influencerCampaign.countryTags,
        influencerText: campaign.influencerText,
        value: c.influencerCampaign.value,
        files: campaign.files,
        startDate: c.completeCampaign.startDate,
        endDate: c.completeCampaign.endDate
      };
      setOverrideCamp(overrideCampaign);
    }
  }, [c.createCampaign.campaignTitle, id]);

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid item lg={8} xl={9} xs={12}>
        <Brief project={project} campaign={overrideCamp} />
        <Box mt={3}>
          <Files files={project.files} campaign={overrideCamp} />
        </Box>
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        <Box mb={3}>
          <Metadata project={project} campaign={overrideCamp} />
        </Box>
        <Members
          members={project.members}
          handleTabsChange={handleTabsChange}
        />
      </Grid>
    </Grid>
  );
};

Overview.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  project: PropTypes.object.isRequired
};

export default Overview;
