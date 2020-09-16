import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link as RouterLink } from 'react-router-dom';
import GenericMoreButton from 'src/components/GenericMoreButton';
import Label from 'src/components/Label';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Order, OrderStatus } from 'src/types/reports';
import axios from 'src/utils/axios';

interface LatestOrdersProps {
  className?: string;
}

const labelColors: Record<OrderStatus, 'success' | 'warning' | 'error'> = {
  complete: 'success',
  pending: 'warning',
  rejected: 'error'
};

const useStyles = makeStyles(theme => ({
  root: {},
  marginRight: {
    marginRight: theme.spacing(1)
  }
}));

const LatestOrders: FC<LatestOrdersProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [orders, setOrders] = useState<Order[]>([]);

  const getOrders = useCallback(async () => {
    try {
      const response = await axios.get<{ orders: Order[] }>(
        '/api/reports/latest-orders'
      );

      if (isMountedRef.current) {
        setOrders(response.data.orders);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={<GenericMoreButton />}
        title="Companies & Roles Data"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Number
                    </TableSortLabel>
                  </Tooltip>
                </TableCell> */}
                <TableCell>Companies</TableCell>
                <TableCell>Total Views</TableCell>
                <TableCell>Roles</TableCell>
                {/* <TableCell align="right">Date</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(order => (
                <TableRow hover key={order.id}>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>{order.items * 13}</TableCell>
                  <TableCell>
                    {order.roles &&
                      order.roles.map(i => (
                        <Label
                          key={i}
                          className={classes.marginRight}
                          color="success"
                        >
                          {i}
                        </Label>
                      ))}
                  </TableCell>
                  {/* <TableCell>
                    {numeral(order.totalAmount).format(
                      `${order.currency}0,0.00`
                    )}
                  </TableCell> */}
                  {/* <TableCell>
                    <Label color={labelColors[order.status]}>
                      {order.status}
                    </Label>
                  </TableCell>
                  <TableCell align="right">
                    {moment(order.createdAt).format('DD MMM, YYYY hh:mm:ss')}
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box p={2} display="flex" justifyContent="flex-end">
        <Button
          component={RouterLink}
          size="small"
          to="#"
          endIcon={<NavigateNextIcon />}
        >
          See all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
