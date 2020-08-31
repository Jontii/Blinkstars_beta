import PropTypes from 'prop-types';
import React, { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface GuestGuardProps {
  children?: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    if (user.name === 'Emilee Simchenko')
      return <Redirect to="/app/reports/dashboard-alternative" />;
    else return <Redirect to="/app/reports/dashboard" />;
  }

  return <>{children}</>;
};

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default GuestGuard;
