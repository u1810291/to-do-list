/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { DesktopSidebar } from './style';

// eslint-disable-next-line max-len
export default ({ collapsed, children }) => <DesktopSidebar collapsed={collapsed}>{children}</DesktopSidebar>;
