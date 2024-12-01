"use client";
import { useFetchPost } from "@/queries/post_query";
import Container from "../Container";
import { TypographyH1 } from "../typography/TypographyH1";
import { TypographyP } from "../typography/TypographyP";
import Link from "next/link";
import { PostCard } from "../ui/three-card";
import {Post} from "../../models/post"
import { LoadingBlog } from "./LoadingGrid";

export default function PostGrid() {
  const { data, isLoading, error } = useFetchPost();

  return (
    <div>
      <Container>
        <div className="grid grid-cols-8 gap-x-3">
          {/* Introductory section */}
          <div className="col-span-full md:col-span-2 text-justify md:pr-3">
            <TypographyH1>Posts</TypographyH1>
            <TypographyP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              corrupti, repellendus dolores assumenda qui ratione libero, cumque
              illo nam accusantium sit! Labore hic blanditiis numquam saepe sit
              voluptates ipsum earum.
            </TypographyP>
          </div>

          {/* Handle loading, error, and data display */}
          {isLoading ? (
            <div className="col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2">
              <LoadingBlog/>
              <LoadingBlog/>
              <LoadingBlog/>
              <LoadingBlog/>
              <LoadingBlog/>
              <LoadingBlog/>
            </div>
          ) : error ? (
            <div className="col-span-6 text-red-500 text-center">
              <TypographyP>
                {error.message || "An error occurred while fetching posts."}
              </TypographyP>
            </div>
          ) : (
            <div className="col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2">
              {data.slice(0, 6).map((item: Post) => (
                <Link key={item.id} href={`posts/${item.id}`}>
                  <PostCard post={item} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
