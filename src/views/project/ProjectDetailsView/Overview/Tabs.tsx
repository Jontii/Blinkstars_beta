import { Tab, Tabs } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';
import useAuth from 'src/hooks/useAuth';

interface IProps {
  handleTabsChange: (event: ChangeEvent<{}>, value: string) => void;
  currentTab: string;
}

const TabsIndex: FC<IProps> = ({ handleTabsChange, currentTab }) => {
  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'applicants', label: 'Matched Influencers' },
    { value: 'activity', label: 'History' }
  ];

  const tabsInf = [{ value: 'overview', label: 'Overview' }];

  const { user } = useAuth();

  const tempTabs = user.tier === 'Company' ? tabs : tabsInf;

  return (
    <Tabs
      onChange={handleTabsChange}
      scrollButtons="auto"
      textColor="secondary"
      value={currentTab}
      variant="scrollable"
    >
      {tempTabs.map(tab => (
        <Tab key={tab.value} label={tab.label} value={tab.value} />
      ))}
    </Tabs>
  );
};

export default TabsIndex;
