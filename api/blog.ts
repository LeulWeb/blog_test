"use client";
import { axiosInstance } from "@/config/api_config";

export const fetchPost = async () => {
  const response = await axiosInstance.get(`/blogs`);
  console.log(response);
  console.log(response.data);
  return response.data;
};

export const fetchPostById = async (id: number) => {
  const response = await axiosInstance.get(`/blogs/${id}`);
  console.log(response);
  console.log(`Response for single post`);
  return response.data["blog"];
};
