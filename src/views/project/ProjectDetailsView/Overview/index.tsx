import { Box, Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Project } from 'src/types/project';
import Brief from './Brief';
import Files from './Files';
import Members from './Members';
import Metadata from './Metadata';

interface OverviewProps {
  className?: string;
  project: Project;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Overview: FC<OverviewProps> = ({ className, project, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid item lg={8} xl={9} xs={12}>
        <Brief project={project} />
        <Box mt={3}>
          <Files files={project.files} />
        </Box>
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        <Box mb={3}>
          <Metadata project={project} />
        </Box>
        <Members members={project.members} />
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
