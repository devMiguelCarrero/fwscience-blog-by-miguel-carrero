import cx from 'classnames';
import classes from './header.module.scss';
import { classNames } from '@/shared/types/types';
import { FC, ReactNode } from 'react';

interface Props {
  className?: classNames;
  children: ReactNode;
  secondary?: ReactNode;
}
const Header: FC<Props> = ({ className, secondary, children, ...props }) => {
  const classNames = cx(classes.header, {
    [className]: className,
  });

  const mainContentClasses = cx(classes.header__content, {
    [classes['header__content--main']]: true,
  });

  const secondaryContentClasses = cx(classes.header__content, {
    [classes['header__content--secondary']]: true,
  });

  return (
    <header className={classNames}>
      <div className={mainContentClasses}>{children}</div>
      <div className={secondaryContentClasses}>{secondary}</div>
    </header>
  );
};
export default Header;
