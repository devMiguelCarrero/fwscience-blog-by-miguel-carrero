import axios, { AxiosResponse } from 'axios';

export interface User {
  id: number;
  name: string;
}

export const getSingleUser = async (id: number): Promise<User | null> => {
  try {
    const response: AxiosResponse<User> = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (response.status !== 200) {
      throw new Error('There was an error fetching the users');
    }

    return response.data;
  } catch (error: unknown) {
    console.error(`Can't fetch the users: ${error}`);
    return null;
  }
};
