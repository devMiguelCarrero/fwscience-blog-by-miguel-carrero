import axios, { AxiosResponse } from 'axios';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getCommentsByPost = async (
  id: number
): Promise<Comment[] | null> => {
  try {
    const response: AxiosResponse<Comment[]> = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );

    if (response.status !== 200) {
      throw new Error('There was an error fetching the comments');
    }

    return response.data;
  } catch (error: unknown) {
    console.error(`Can't fetch the comments: ${error}`);
    return null;
  }
};
