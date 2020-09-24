import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useHistory } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import GenericMoreButton from 'src/components/GenericMoreButton';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { useSelector } from 'src/store';
import { Theme } from 'src/theme';
import { Project } from 'src/types/reports';
import axios from 'src/utils/axios';
import Campaigns from './Campaigns';

interface LatestProjectsProps {
  className?: string;
  title?: string;
  showOnlyFirst: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  technology: {
    height: 30,
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  row: {
    cursor: 'pointer'
  }
}));

const LatestProjects: FC<LatestProjectsProps> = ({
  className,
  title,
  showOnlyFirst,
  ...rest
}) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState<Project[]>([]);
  const history = useHistory();

  const campaign = useSelector(state => state.campaign);
  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get<{ projects: Project[] }>(
        '/api/reports/latest-projects'
      );

      if (isMountedRef.current) {
        let tempProjects = [];

        if (showOnlyFirst) {
          let temp = [...response.data.projects];

          if (campaign.createCampaign.campaignTitle) {
            temp.push({
              id: 'klarn',
              author: {
                avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_9.svg`,
                name: campaign.companyCampaign.companyName
              },
              budget: parseInt(campaign.createCampaign.campaignBudget),
              createdAt: new Date().getTime(),
              currency: 'SEK',
              technologies: [],
              matchScore: '89%',
              title: campaign.createCampaign.campaignTitle
            });
          }

          // temp.splice(0, 1);
          setProjects(temp);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [
    isMountedRef,
    campaign.createCampaign.campaignTitle,
    campaign.createCampaign.campaignBudget,
    campaign.companyCampaign.companyName,
    showOnlyFirst
  ]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={<GenericMoreButton />}
        title={title || 'My Matched Campaigns'}
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={900}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Campaign Owner</TableCell>
                {/* <TableCell>Budget</TableCell> */}
                {showOnlyFirst && <TableCell>Campaign Status</TableCell>}
                {showOnlyFirst && <TableCell>Network Match Score</TableCell>}
                <TableCell align="right" sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Created
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            {/* {!showOnlyFirst && (
              <TableBody>
                {projects.map(project => (
                  <TableRow
                    hover
                    key={project.id}
                    className={classes.row}
                    // onClick={() => history.push('/app/projects/1')}
                  >
                    <TableCell>{project.title}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar alt="Author" src={project.author.avatar}>
                          {getInitials(project.author.name)}
                        </Avatar>
                        <Box ml={1}>{project.author.name}</Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {numeral(project.budget).format(
                        `${project.currency}0,0.00`
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {moment(project.createdAt).format('DD MMM, YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )} */}
            <>
              <TableBody>
                {projects &&
                  showOnlyFirst &&
                  projects.map((project, index) => (
                    <Campaigns key={index} campaign={project} index={index} />
                  ))}
              </TableBody>
            </>
          </Table>
        </Box>
      </PerfectScrollbar>
      {!showOnlyFirst && (
        <Box p={2} display="flex" justifyContent="flex-end">
          <Button
            component={RouterLink}
            size="small"
            to="#"
            endIcon={<NavigateNextIcon />}
          >
            See all
          </Button>
        </Box>
      )}
    </Card>
  );
};

LatestProjects.propTypes = {
  className: PropTypes.string
};

export default LatestProjects;
