import React, { FC } from 'react';
import cx from 'classnames';

import classes from './user-name.module.scss';
import { classNames } from '@/shared/types/types';
import UserIcon from '@/shared/assets/icons/UserIcon';

interface Props {
  children: React.ReactNode;
  className?: classNames;
}

const UserName: FC<Props> = ({ children, className, ...props }) => {
  const classNames = cx(classes['user-name'], {
    [className]: className,
  });

  return (
    <span {...props} className={classNames}>
      <UserIcon />
      <span>{children}</span>
    </span>
  );
};
export default UserName;
