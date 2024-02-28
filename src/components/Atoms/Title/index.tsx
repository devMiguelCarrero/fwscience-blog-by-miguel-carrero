import React from 'react';
import cx from 'classnames';

import classes from './title.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  children: React.ReactNode;
  variant?: 'regular' | 'colossal' | 'massive';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: classNames;
  align?: 'left' | 'right' | 'center';
}

const Title: React.FC<Props> = ({
  children,
  tag = 'h2',
  variant = 'regular',
  className,
  align = 'left',
  ...props
}) => {
  const classNames = cx(classes.title, {
    [className]: className,
    [classes[`title--${variant}`]]: variant,
  });

  const Tag = tag;

  return (
    <Tag {...props} style={{ textAlign: align }} className={classNames}>
      {children}
    </Tag>
  );
};

interface ExcerptProps {
  children: React.ReactNode;
  className?: classNames;
}

export const TitleExcerpt: React.FC<ExcerptProps> = ({
  children,
  className,
}) => {
  const classNames = cx(classes.title__excerpt, {
    [className]: className,
  });

  return <span className={classNames}>{children}</span>;
};

export default Title;
