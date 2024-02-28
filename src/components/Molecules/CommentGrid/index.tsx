'use client';

import cx from 'classnames';
import classes from './comment-grid.module.scss';
import { classNames } from '@/shared/types/types';
import { FC } from 'react';
import { Comment } from '@/shared/lib/comments';
import Paragraph from '@/components/Atoms/Paragraph';
import UserName from '@/components/Atoms/UserName';

interface Props {
  className?: classNames;
  comments: Comment[];
}

const CommentGrid: FC<Props> = ({ className, comments, ...props }) => {
  const classNames = cx(classes['comment-grid'], {
    [className]: className,
  });

  return (
    <div className={classNames}>
      {comments &&
        comments.map((comment) => (
          <div
            className={classes['comment-grid__comment']}
            key={`comment-${comment.id}`}
          >
            <Paragraph variant="small">{comment.body}</Paragraph>
            <Paragraph variant="small">
              <UserName><b>{comment.email}</b></UserName>
            </Paragraph>
          </div>
        ))}
    </div>
  );
};
export default CommentGrid;
