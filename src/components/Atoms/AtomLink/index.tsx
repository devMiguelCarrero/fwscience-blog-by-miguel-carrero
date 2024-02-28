import React, { FC } from 'react';
import cx from 'classnames';

import classes from './atom-link.module.scss';
import { classNames } from '@/shared/types/types';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  color?:
    | 'intense-pink'
    | 'opaque-yellow'
    | 'serene-purple'
    | 'cool-turquoise'
    | 'palid-red';
  className?: classNames;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const AtomLink: FC<Props> = ({
  children,
  color,
  className,
  href,
  target,
  ...props
}) => {
  const classNames = cx(classes['atom-link'], {
    [className]: className,
    [classes[`atom-link--${color}`]]: color,
  });

  return (
    <Link href={href} target={target} {...props} className={classNames}>
      {children}
    </Link>
  );
};
export default AtomLink;
