import React from 'react';
import cx from 'classnames';

import classes from './container.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  children: React.ReactNode;
  variant?: 'regular' | 'full';
  tag?: 'div' | 'section' | 'main' | 'footer' | 'header';
  className?: classNames;
  props?: any;
}

const Container: React.FC<Props> = ({
  children = '',
  variant = 'regular',
  tag = 'div',
  className,
  ...props
}) => {
  const Tag = tag;

  const classNames = cx(`${classes.container} max-w-full`, {
    [className]: className,
    [classes[`container--${variant}`]]: variant,
  });

  return (
    <Tag {...props} className={classNames}>
      {children}
    </Tag>
  );
};

export default Container;
