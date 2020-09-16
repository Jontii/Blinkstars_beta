import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from 'src/theme';
import { ProjectApplicant, ProjectAuthor } from 'src/types/project';
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
  },
  rating: {
    marginLeft: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold
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
  const [approve, setApprove] = useState<boolean[]>([]);

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
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Rating name="rating" value={Math.floor(Math.random() * 5) + 3} />
          </Box>
          <Typography color="textSecondary" variant="body2">
            {Math.floor(Math.random() * 60) + 30} reviews in total
          </Typography>
        </Box>
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
        {/* <Box my={2}>
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
            Approve as influencer
          </Button>
        </Box>
        <ApplyModal
          author={author}
          onApply={handleApplyModalClose}
          onClose={handleApplyModalClose}
          open={isApplyModalOpen}
        /> */}
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
