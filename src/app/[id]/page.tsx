import Paragraph from '@/components/Atoms/Paragraph';
import Title from '@/components/Atoms/Title';
import Container from '@/components/Atoms/container';
import { Post, getAllPosts, getSinglePost } from '@/shared/lib/posts';
import { notFound } from 'next/navigation';

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

  return (
    <Container>
      <Title variant="colossal">{post.title}</Title>
      <Paragraph>{post.body}</Paragraph>
    </Container>
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
