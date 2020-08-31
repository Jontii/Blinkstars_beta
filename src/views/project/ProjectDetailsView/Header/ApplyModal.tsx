import {
  Avatar,
  Box,
  Button,
  Dialog,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { ChangeEvent, FC, useState } from 'react';
import { Theme } from 'src/theme';
import { ProjectAuthor } from 'src/types/project';
import getInitials from 'src/utils/getInitials';

interface ApplyModalProps {
  author: ProjectAuthor;
  className?: string;
  onApply?: () => void;
  onClose?: () => void;
  open: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  helperText: {
    textAlign: 'right',
    marginRight: 0
  }
}));

const ApplyModal: FC<ApplyModalProps> = ({
  author,
  className,
  onApply,
  onClose,
  open,
  ...rest
}) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setValue(event.target.value);
  };

  const handleApply = (): void => {
    enqueueSnackbar('Request sent', {
      variant: 'success'
    });
    onApply();
  };

  return (
    <Dialog maxWidth="lg" onClose={onClose} open={open}>
      <div className={clsx(classes.root, className)} {...rest}>
        <Typography
          align="center"
          gutterBottom
          variant="h3"
          color="textPrimary"
        >
          You have been selected for our campaign
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Write down a short note with your application regarding why you think
          you&apos;d be a good fit for our campaign.
        </Typography>
        <Box mt={3}>
          <TextField
            autoFocus
            FormHelperTextProps={{ classes: { root: classes.helperText } }}
            fullWidth
            helperText={`${200 - value.length} characters left`}
            label="Short Note"
            multiline
            disabled
            onChange={handleChange}
            placeholder="What excites you about this campaign?"
            rows={5}
            value={value}
            variant="outlined"
          />
          <Box mt={6} display="flex" alignItems="center">
            <Avatar alt="Author" src={author.avatar}>
              {getInitials(author.name)}
            </Avatar>
            <Box ml={2}>
              <Typography variant="h3" color="textPrimary">
                {author.name}
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                {author.bio}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box mt={3} p={3}>
          <Button
            onClick={handleApply}
            variant="contained"
            fullWidth
            color="primary"
          >
            Send request to influencer
          </Button>
        </Box>
      </div>
    </Dialog>
  );
};

ApplyModal.propTypes = {
  // @ts-ignore
  author: PropTypes.object.isRequired,
  className: PropTypes.string,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};

ApplyModal.defaultProps = {
  onApply: () => {},
  onClose: () => {}
};

export default ApplyModal;
