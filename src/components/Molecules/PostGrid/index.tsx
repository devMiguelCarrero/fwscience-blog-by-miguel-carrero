import cx from 'classnames';
import classes from './post-grid.module.scss';
import { classNames } from '@/shared/types/types';
import { FC, ReactNode } from 'react';
import Title from '@/components/Atoms/Title';
import Paragraph from '@/components/Atoms/Paragraph';
import Link from 'next/link';
import AtomLink from '@/components/Atoms/AtomLink';
import { generateSummary } from '@/shared/lib/posts';

interface Props {
  className?: classNames;
  children: ReactNode;
}

interface SinglePostProps {
  className?: classNames;
  title: string;
  body: string;
  id: number;
}

export const SinglePost: FC<SinglePostProps> = ({
  className,
  title,
  body,
  id,
}) => {
  const classNames = cx(classes['post-grid__post'], { [className]: className });

  return (
    <article className={classNames}>
      <div className={classes['post-grid__post__content']}>
        <AtomLink href={`/${id}`}>
          <Title align="center">{title}</Title>
        </AtomLink>
        <AtomLink href={`/${id}`}>
          <Paragraph align="center">{generateSummary(body)}</Paragraph>
        </AtomLink>
      </div>
    </article>
  );
};

const PostGrid: FC<Props> = ({ className, children, ...props }) => {
  const classNames = cx(classes['post-grid'], {
    [className]: className,
  });

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};
export default PostGrid;
