'use client';

import cx from 'classnames';
import classes from './post-grid.module.scss';
import { classNames } from '@/shared/types/types';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import Title from '@/components/Atoms/Title';
import Paragraph from '@/components/Atoms/Paragraph';
import Link from 'next/link';
import AtomLink from '@/components/Atoms/AtomLink';
import { Post, generateSummary } from '@/shared/lib/posts';

interface Props {
  className?: classNames;
  posts: Post[];
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
        <AtomLink href={`/posts/${id}`}>
          <Title align="center">{title}</Title>
        </AtomLink>
        <AtomLink href={`/posts/${id}`}>
          <Paragraph align="center">{generateSummary(body)}</Paragraph>
        </AtomLink>
      </div>
    </article>
  );
};

const PostGrid: FC<Props> = ({ className, posts, ...props }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [srcInput, setSrcInput] = useState<string>('');

  const classNames = cx(classes['post-grid'], {
    [className]: className,
  });

  const srcInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSrcInput(event.target.value);
  };

  useEffect(() => {
    if (srcInput.trim() !== '') {
      setFilteredPosts((oldPosts) => {
        const newPosts = [...oldPosts];
        return newPosts.filter((post) =>
          post.title.toLowerCase().includes(srcInput.toLocaleLowerCase())
        );
      });
    } else {
      setFilteredPosts(posts);
    }
  }, [srcInput, posts]);

  return (
    <>
      <aside className={classes['post-searcher']}>
        <input
          className={classes['post-searcher__search']}
          type="search"
          placeholder="Filter Posts by Title"
          value={srcInput}
          onChange={srcInputHandler}
        />
      </aside>
      <div {...props} className={classNames}>
        {filteredPosts &&
          filteredPosts.map((post: Post) => (
            <SinglePost
              title={post.title}
              id={post.id}
              body={post.body}
              key={`post-${post.id}`}
            />
          ))}
      </div>
    </>
  );
};
export default PostGrid;
