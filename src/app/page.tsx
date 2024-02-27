import Paragraph from '@/components/Atoms/Paragraph';
import Title from '@/components/Atoms/Title';
import Container from '@/components/Atoms/container';
import Header from '@/components/Molecules/Header';
import { Post, getAllPosts } from '@/shared/lib/posts';
import Link from 'next/link';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="main">
      <Header secondary={<></>}>
        <Title variant="colossal" tag="h1">
          Next.js Test Blog by devMiguelCarrero
        </Title>
        <Paragraph>
          This is a custom Blog made with Next.js by devMiguelCarrero with the
          purpose of accomplish a coding test sent by fwscience. In the future,
          this will be used as a Next.js blog boilerplate
        </Paragraph>
      </Header>
      <Container>
        <Paragraph align="center">
          This is a simple call to action only with the purpouse of separate the
          blog grid from the header and add an extra content. To see more
          projects related to Next.js and headless WordPress, please check my{' '}
          <Link href="https://github.com/devMiguelCarrero" target="_blank">
            Github
          </Link>
        </Paragraph>
      </Container>
      <Container>
        {posts &&
          posts.map((post: Post) => (
            <div key={`post-${post.id}`}>
              <Title>{post.title}</Title>
              <Link href={`/${post.id}`}>
                <Paragraph>{post.body}</Paragraph>
              </Link>
            </div>
          ))}
      </Container>
    </main>
  );
}

export const revalidate = 3600; // revalidate at most every hour
