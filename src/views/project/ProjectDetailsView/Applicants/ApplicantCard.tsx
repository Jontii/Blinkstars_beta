import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  makeStyles,
  SvgIcon,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { UserCheck } from 'react-feather';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from 'src/theme';
import { ProjectApplicant } from 'src/types/project';
interface ApplicantCardProps {
  className?: string;
  applicant: ProjectApplicant;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  media: {
    height: 125
  },
  content: {
    paddingTop: 0
  },
  avatar: {
    height: 64,
    width: 64
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}));

const ApplicantCard: FC<ApplicantCardProps> = ({
  className,
  applicant,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardMedia className={classes.media} image={applicant.cover} />
      <CardContent className={classes.content}>
        <Box mt={-4} mb={2} display="flex" justifyContent="center">
          <Avatar
            alt="Applicant"
            className={classes.avatar}
            component={RouterLink}
            src={applicant.avatar}
            to="#"
          />
        </Box>
        <Link
          align="center"
          color="textPrimary"
          component={RouterLink}
          display="block"
          to="#"
          underline="none"
          variant="h6"
        >
          {applicant.name}
        </Link>
        <Typography align="center" variant="body2" color="textSecondary">
          {applicant.commonConnections} previous campaigns
        </Typography>
        <Box my={2}>
          <Divider />
        </Box>
        {applicant.labels.map(label => (
          <Chip
            key={label}
            className={classes.chip}
            label={label}
            variant="outlined"
          />
        ))}
        <Box my={2}>
          <Divider />
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            className={classes.action}
            // onClick={handleApplyModalOpen}
            variant="contained"
            color="secondary"
            startIcon={
              <SvgIcon fontSize="small">
                <UserCheck />
              </SvgIcon>
            }
          >
            Select for campaign
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

ApplicantCard.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  applicant: PropTypes.object.isRequired
};

export default ApplicantCard;
