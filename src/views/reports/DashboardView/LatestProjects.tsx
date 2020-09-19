import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Link,
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
import moment from 'moment';
import { useSnackbar } from 'notistack';
import numeral from 'numeral';
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
import getInitials from 'src/utils/getInitials';

interface LatestProjectsProps {
  className?: string;
  title?: string;
  showOnlyFirst: boolean;
  setAccepted?: (value: boolean) => void;
  accepted?: boolean;
}

const technologyMap: Record<string, string> = {
  'html-css': `${process.env.PUBLIC_URL}/static/images/technologies/html.svg`,
  'react-js': `${process.env.PUBLIC_URL}/static/images/technologies/react-js.svg`,
  'vue-js': `${process.env.PUBLIC_URL}/static/images/technologies/vue-js.svg`,
  angular: `${process.env.PUBLIC_URL}/static/images/technologies/angular.svg`,
  figma: `${process.env.PUBLIC_URL}/static/images/technologies/figma.svg`,
  sketch: `${process.env.PUBLIC_URL}/static/images/technologies/sketch.svg`
};

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
  accepted,
  setAccepted,
  ...rest
}) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState<Project[]>([]);
  const history = useHistory();

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get<{ projects: Project[] }>(
        '/api/reports/latest-projects'
      );

      if (isMountedRef.current) {
        let tempProjects = [];

        if (showOnlyFirst) {
          tempProjects.push(response.data.projects[0]);
          setProjects(tempProjects);
        } else {
          let temp = [...response.data.projects];
          temp.splice(0, 1);
          setProjects(temp);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  const { enqueueSnackbar } = useSnackbar();

  const setClickAccepted = (value: boolean) => {
    if (!value) {
      setAccepted(value);

      enqueueSnackbar(
        'Campaign accepted, congratulations! Click on the campaign title to view the campaign. 🎉',
        {
          variant: 'success',
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'bottom'
          },
          transitionDuration: 500
        }
      );
    } else {
      setAccepted(value);
    }
  };

  useEffect(() => {
    getProjects();
  }, [getProjects]);
  const campaign = useSelector(state => state.campaign);

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
                <TableCell>Author</TableCell>
                <TableCell>Budget</TableCell>
                {showOnlyFirst && <TableCell>Matched Campaigns</TableCell>}
                <TableCell align="right" sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Created
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            {!showOnlyFirst && (
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
            )}
            <>
              {projects[0] &&
                campaign.createCampaign.campaignTitle &&
                showOnlyFirst && (
                  <TableBody>
                    <TableRow hover className={classes.row}>
                      <TableCell>
                        {/* onClick={() => history.push('/app/projects/1')} */}
                        <Link component={RouterLink} to="/app/campaign/view">
                          {campaign.createCampaign.campaignTitle}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Avatar alt="Author" src={projects[0].author.avatar}>
                            {getInitials(campaign.companyCampaign.companyName)}
                          </Avatar>
                          <Box ml={1}>
                            {campaign.companyCampaign.companyName}
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {numeral(campaign.createCampaign.campaignBudget).format(
                          `SEK0,0.00`
                        )}
                      </TableCell>
                      <TableCell>
                        {accepted ? (
                          <Button
                            onClick={() => setClickAccepted(!accepted)}
                            color="secondary"
                          >
                            Accept
                          </Button>
                        ) : (
                          <Button
                            onClick={() => setClickAccepted(!accepted)}
                            color="primary"
                          >
                            Decline
                          </Button>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {moment(new Date()).format('DD MMM, YYYY')}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
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
