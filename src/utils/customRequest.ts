import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTZhMDQ3NzI0Y2EzMGE0NDIxMzM0NWFiNzZhZTNiNiIsInN1YiI6IjY0Y2I2NDJhMjk3MzM4MDIwZTU3NmYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3_ZXNI9VVxP1BfagaoDM1bAcinbUWtZpGG7irO4N2c",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const get = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get(url);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Request failed.");
    }
  } catch (error) {
    throw error;
  }
};
