import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { ChangeEvent, FC } from 'react';
import { ProjectMember } from 'src/types/project';
import getInitials from 'src/utils/getInitials';

interface MembersProps {
  className?: string;
  members: ProjectMember[];
  handleTabsChange: (event: ChangeEvent<{}>, value: string) => void;
}

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    paddingTop: 0
  }
}));

const Members: FC<MembersProps> = ({
  className,
  members,
  handleTabsChange,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        className={classes.header}
        title="Matched Influencers"
        titleTypographyProps={{
          variant: 'overline'
        }}
      />
      <CardContent className={classes.content}>
        <List>
          {members.map(member => (
            <ListItem disableGutters key={member.id}>
              <ListItemAvatar>
                <Avatar alt="Author" src={member.avatar}>
                  {getInitials(member.name)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={member.name}
                primaryTypographyProps={{ variant: 'h6' }}
                secondary={member.bio}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions>
        <Button onClick={e => handleTabsChange(e, 'applicants')} fullWidth>
          Show Matched Influencers
        </Button>
      </CardActions>
    </Card>
  );
};

Members.propTypes = {
  className: PropTypes.string,
  members: PropTypes.array.isRequired
};

export default Members;
