import Paragraph from '@/components/Atoms/Paragraph';
import Separator from '@/components/Atoms/Separator';
import Title from '@/components/Atoms/Title';
import UserName from '@/components/Atoms/UserName';
import Container from '@/components/Atoms/container';
import { Post, getAllPosts, getSinglePost } from '@/shared/lib/posts';
import { User, getSingleUser } from '@/shared/lib/users';
import { notFound } from 'next/navigation';

import classes from './page.module.scss';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post: Post | null = await getSinglePost(parseInt(params.id));
  if (!post) {
    notFound();
  }

  let user: User | null = await getSingleUser(post.userId);
  if (!user) {
    user = { id: 0, name: 'Unkown User' };
  }

  return (
    <article className={classes['article']}>
      <Container>
        <Title variant="colossal">{post.title}</Title>
        <Separator />
        <Paragraph>{post.body}</Paragraph>
        <Paragraph>
          <UserName>{user.name}</UserName>
        </Paragraph>
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

export const revalidate = 3600; // revalidate at most every hour
