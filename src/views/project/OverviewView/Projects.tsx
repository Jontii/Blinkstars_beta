import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ProjectCard from 'src/components/ProjectCard';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import { Project } from 'src/types/project';
import axios from 'src/utils/axios';

interface ProjectsProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  }
}));

const Projects: FC<ProjectsProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get<{ projects: Project[] }>(
        '/api/projects/overview/projects'
      );

      if (isMountedRef.current) {
        setProjects(response.data.projects);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography className={classes.title} variant="h5" color="textPrimary">
          Active Projects
        </Typography>
        <Button
          component={RouterLink}
          to="/app/projects/browse"
          endIcon={<KeyboardArrowRightIcon />}
        >
          See all
        </Button>
      </Box>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid item key={project.id} md={4} sm={6} xs={12}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
