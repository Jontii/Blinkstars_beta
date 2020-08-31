import { Box, Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import FileCard from './FileCard';

interface FilesProps {
  className?: string;
  files: any[];
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Files: FC<FilesProps> = ({ className, files, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <Card>
        <CardContent>
          <FilesDropzone />
        </CardContent>
      </Card> */}
      <Box mt={3}>
        <Grid container spacing={3}>
          {files.map(file => (
            <Grid item key={file.id} lg={4} md={4} sm={6} xs={12}>
              <FileCard file={file} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

Files.propTypes = {
  className: PropTypes.string,
  files: PropTypes.array.isRequired
};

export default Files;
