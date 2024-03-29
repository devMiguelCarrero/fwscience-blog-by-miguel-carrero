import axios, { AxiosResponse } from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const response: AxiosResponse<Post[]> = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    if (response.status !== 200) {
      throw new Error('There was an error fetching the posts');
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`Can't fetch the posts: ${error.message}`);
  }
};

export const getSinglePost = async (id: number): Promise<Post | null> => {
  try {
    const response: AxiosResponse<Post> = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (response.status !== 200) {
      throw new Error('There was an error fetching the posts');
    }

    return response.data;
  } catch (error: unknown) {
    console.error(`Can't fetch the posts: ${error}`);
    return null;
  }
};

export const generateSummary = (body: string, dots: boolean = true) => {
  const wordNum = 50;
  const words = body.split(' '); // Divide el string en un array de palabras
  if (words.length > wordNum) {
    return `${words.slice(0, wordNum).join(' ')}${dots ? '...' : ''}`;
  }
  return body;
};
