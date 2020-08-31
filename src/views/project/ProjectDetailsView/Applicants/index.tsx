import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { ProjectAuthor } from 'src/types/project';
import ApplicantCard from './ApplicantCard';

interface ApplicantsProps {
  className?: string;
  applicants: any[];
  author: ProjectAuthor;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Applicants: FC<ApplicantsProps> = ({
  className,
  applicants,
  author,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      {applicants.map(applicant => (
        <Grid item key={applicant.id} lg={4} xs={12}>
          <ApplicantCard applicant={applicant} author={author} />
        </Grid>
      ))}
    </Grid>
  );
};

Applicants.propTypes = {
  className: PropTypes.string,
  applicants: PropTypes.array.isRequired
};

export default Applicants;
