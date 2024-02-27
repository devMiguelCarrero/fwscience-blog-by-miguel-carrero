import React, { FC } from 'react';
import cx from 'classnames';

import classes from './paragraph.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  children: React.ReactNode;
  variant?: 'regular' | 'medium' | 'high';
  className?: classNames;
  align?: 'left' | 'right' | 'center';
}

const Paragraph: FC<Props> = ({
  children,
  variant,
  className,
  align = 'left',
  ...props
}) => {
  const classNames = cx(classes.paragraph, {
    [className]: className,
    [classes[`paragraph--${variant}`]]: variant,
  });

  return (
    <p style={{ textAlign: align }} {...props} className={classNames}>
      {children}
    </p>
  );
};
export default Paragraph;
