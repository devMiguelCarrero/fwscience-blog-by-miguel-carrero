import Paragraph from '@/components/Atoms/Paragraph';
import Separator from '@/components/Atoms/Separator';
import Title from '@/components/Atoms/Title';
import UserName from '@/components/Atoms/UserName';
import Container from '@/components/Atoms/container';
import {
  Post,
  generateSummary,
  getAllPosts,
  getSinglePost,
} from '@/shared/lib/posts';
import { User, getSingleUser } from '@/shared/lib/users';
import { Comment, getCommentsByPost } from '@/shared/lib/comments';
import { notFound } from 'next/navigation';

import classes from './page.module.scss';
import CommentGrid from '@/components/Molecules/CommentGrid';
import CommentForm from '@/components/Molecules/CommentForm';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const postId = parseInt(params.id);
  const post: Post | null = await getSinglePost(postId);
  if (!post) {
    notFound();
  }

  let user: User | null = await getSingleUser(post.userId);
  if (!user) {
    user = { id: 0, name: 'Unkown User' };
  }

  let comments: Comment[] | null = await getCommentsByPost(postId);
  if (!comments) {
    comments = [];
  }

  return (
    <article className={classes['article']}>
      <Container>
        <Title tag="h1" variant="colossal">
          {post.title}
        </Title>
        <Separator />
        <Paragraph>{post.body}</Paragraph>
        <Paragraph>
          <UserName>{user.name}</UserName>
        </Paragraph>
        <Separator />
        <Title tag="h3">Leave a Comment</Title>
        <CommentForm />
        <Separator />
        <Title tag="h3">Comments</Title>
        <CommentGrid comments={comments} />
      </Container>
    </article>
  );
}

export const generateStaticParams = async () => {
  const posts: Post[] = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toLocaleString() },
  }));
  return paths;
};

export const generateMetadata = async ({ params }: PostPageProps) => {
  const post: Post | null = await getSinglePost(parseInt(params.id));
  return {
    title: post?.title || '',
    description: post?.body ? generateSummary(post?.body, false) : '',
  };
};

export const revalidate = 3600; // revalidate at most every hour
