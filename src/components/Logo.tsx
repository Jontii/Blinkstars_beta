import React, { FC } from 'react';

interface LogoProps {
  [key: string]: any;
}

const Logo: FC<LogoProps> = props => {
  return (
    <img
      alt="Logo"
      style={{ height: '42px' }}
      src={`${process.env.PUBLIC_URL}/static/home/Btxtblue.svg`}
      {...props}
    />
  );
};

export default Logo;
