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
import React, { FC, useState } from 'react';
import { UserCheck } from 'react-feather';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from 'src/theme';
import { ProjectApplicant, ProjectAuthor } from 'src/types/project';
import ApplyModal from '../Header/ApplyModal';
interface ApplicantCardProps {
  className?: string;
  applicant: ProjectApplicant;
  author: ProjectAuthor;
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
  author,
  ...rest
}) => {
  const classes = useStyles();

  const [isApplyModalOpen, setApplyModalOpen] = useState<boolean>(false);

  const handleApplyModalOpen = (): void => {
    setApplyModalOpen(true);
  };

  const handleApplyModalClose = (): void => {
    setApplyModalOpen(false);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardMedia className={classes.media} image={applicant.cover} />
      <CardContent className={classes.content}>
        <Box mt={-4} mb={2} display="flex" justifyContent="center">
          <Avatar
            alt="Influencer"
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
            onClick={handleApplyModalOpen}
            variant="contained"
            color="secondary"
            startIcon={
              <SvgIcon fontSize="small">
                <UserCheck />
              </SvgIcon>
            }
          >
            Ask to be influencer
          </Button>
        </Box>
        <ApplyModal
          author={author}
          onApply={handleApplyModalClose}
          onClose={handleApplyModalClose}
          open={isApplyModalOpen}
        />
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
