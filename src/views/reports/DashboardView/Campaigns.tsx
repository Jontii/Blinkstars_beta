import {
  Avatar,
  Box,
  Button,
  Link,
  makeStyles,
  TableCell,
  TableRow
} from '@material-ui/core';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'src/store';
import { Project } from 'src/types/reports';
import getInitials from 'src/utils/getInitials';

interface IProps {
  campaign: Project;
  index: number;
}

const Campaigns: FC<IProps> = ({ campaign, index }) => {
  const useStyles = makeStyles(theme => ({
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
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const { companyAcceptedUser, userAccepted } = useSelector(
    state => state.campaign.approvedUser
  );

  // let notDemoCampaign = false;
  // if (campaign.author.name === 'Telia') {
  //   notDemoCampaign = false;
  //   console.log('Enter');
  // } else if (campaign.author.name === 'Bring') {
  //   notDemoCampaign = false;
  //   console.log('Enter');
  // } else {
  //   notDemoCampaign = true;
  // }
  // console.log(notDemoCampaign);

  const [accepted, setAccepted] = useState<boolean>(true);

  const dispatch = useDispatch();

  const setClickAccepted = (value: boolean) => {
    if (!value) {
      setAccepted(value);
      // dispatch(userAcceptedCampaign(true));

      enqueueSnackbar(
        'Applied to campaign, congratulations! Click on the campaign title to view the campaign while your status is pending. 🎉',
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

  return (
    <TableRow hover className={classes.row}>
      <TableCell>
        {/* onClick={() => history.push('/app/projects/1')} */}
        <Link component={RouterLink} to={`/app/campaign/view/${index}`}>
          {/* {campaign.createCampaign.campaignTitle} */}
          {campaign.title}
        </Link>
      </TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
          <Avatar alt="Author" src={campaign.author.avatar}>
            {getInitials(campaign.author.name)}
          </Avatar>
          <Box ml={1}>{campaign.author.name}</Box>
        </Box>
      </TableCell>
      {/* <TableCell>
                        {numeral(campaign.createCampaign.campaignBudget).format(
                          `SEK0,0.00`
                        )}
                      </TableCell> */}
      <TableCell>
        {accepted ? (
          <Button onClick={() => setClickAccepted(!accepted)} color="secondary">
            Accept
          </Button>
        ) : (
          <Button color="primary">
            Pending
            {/* {companyAcceptedUser ? <>Company Accepted</> : <>Pending</>} */}
          </Button>
        )}
      </TableCell>
      <TableCell style={{ color: '#4caf50' }}>{campaign.matchScore}</TableCell>
      <TableCell align="right">
        {moment(campaign.createdAt).format('DD MMM, YYYY')}
      </TableCell>
    </TableRow>
  );
};

export default Campaigns;
