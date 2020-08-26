import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import Markdown from 'react-markdown/with-html';
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
  }
}));

const Brief: FC<BriefProps> = ({ className, project, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Project Name
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {project.title}
            </Typography>
            <Box mt={3}>
              <Typography variant="subtitle2" color="textSecondary">
                Tags
              </Typography>
              <Box mt={1}>
                {project.tags.map(tag => (
                  <Chip key={tag} variant="outlined" label={tag} />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="subtitle2" color="textSecondary">
            Description
          </Typography>
          <Markdown source={project.description} className={classes.markdown} />
        </Box>
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