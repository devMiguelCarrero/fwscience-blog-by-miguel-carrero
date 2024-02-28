import React, { FC } from 'react';
import cx from 'classnames';

import classes from './separator.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  className?: classNames;
}

const Separator: FC<Props> = ({
  className,

  ...props
}) => {
  const classNames = cx(classes.paragraph, {
    [className]: className,
  });

  return <hr {...props} className={classNames} />;
};
export default Separator;
