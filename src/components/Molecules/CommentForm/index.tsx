'use client';

import cx from 'classnames';
import classes from './comment-form.module.scss';
import { classNames } from '@/shared/types/types';
import { FC, FormEvent } from 'react';
import { Comment } from '@/shared/lib/comments';
import Paragraph from '@/components/Atoms/Paragraph';
import UserName from '@/components/Atoms/UserName';

interface Props {
  className?: classNames;
}

const CommentForm: FC<Props> = ({ className, ...props }) => {
  const classNames = cx(classes['comment-form'], {
    [className]: className,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classNames}>
      <form onSubmit={handleSubmit}>
        <div className={classes['comment-form__field']}>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="email" name="email" required />
        </div>
        <div className={classes['comment-form__field']}>
          <label htmlFor="comment">
            <b>Your Comment</b>
          </label>
          <textarea name="comment"></textarea>
        </div>
        <div className={classes['comment-form__field']}>
          <button type="submit">Comment</button>
        </div>
      </form>
    </div>
  );
};
export default CommentForm;
