import {
  Box,
  Container,
  Divider,
  makeStyles,
  Tab,
  Tabs
} from '@material-ui/core';
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState
} from 'react';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import { Customer } from 'src/types/customer';
import axios from 'src/utils/axios';
import Details from './Details';
import Header from './Header';
import Invoices from './Invoices';
import Logs from './Logs';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const CustomerDetailsView: FC = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [currentTab, setCurrentTab] = useState<string>('details');

  const tabs = [
    { value: 'details', label: 'Details' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'logs', label: 'Logs' }
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const getCustomer = useCallback(async () => {
    try {
      const response = await axios.get<{ customer: Customer }>(
        '/api/customers/1'
      );

      if (isMountedRef.current) {
        setCustomer(response.data.customer);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getCustomer();
  }, [getCustomer]);

  if (!customer) {
    return null;
  }

  return (
    <Page className={classes.root} title="Customer Details">
      <Container maxWidth={false}>
        <Header customer={customer} />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            variant="scrollable"
            textColor="secondary"
          >
            {tabs.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === 'details' && <Details customer={customer} />}
          {currentTab === 'invoices' && <Invoices />}
          {currentTab === 'logs' && <Logs />}
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerDetailsView;
