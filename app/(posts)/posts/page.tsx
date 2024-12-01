"use client";
import Container from "@/components/Container";
import { LoadingBlog } from "@/components/sections/LoadingGrid";
import { TypographyH1 } from "@/components/typography/TypographyH1";
import { TypographyH4 } from "@/components/typography/TypographyH4";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/ui/three-card";
import { Post } from "@/models/post";
import { useFetchPost } from "@/queries/post_query";
import Link from "next/link";

export default function PostsPage() {
  const { data, isLoading, error } = useFetchPost();

  return (
    <Container>
      <div className="flex w-full justify-between">
        <Link href="/">
          <Button variant="link">
            Back
          </Button>
        </Link>
      </div>

      <div>
        <div className="text-center max-w-3xl mx-auto my-5">
          <TypographyH1>Read Blog</TypographyH1>
          <TypographyH4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            itaque repellendus iure laborum lorem.
          </TypographyH4>
        </div>

        {/* Error handling */}
        {error ? (
          <div className="text-center text-red-500">
            <TypographyH4>
              {error.message || "An error occurred while fetching posts."}
            </TypographyH4>
          </div>
        ) : isLoading ? (
          <div className="col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2">
            <LoadingBlog />
            <LoadingBlog />
            <LoadingBlog />
            <LoadingBlog />
            <LoadingBlog />
            <LoadingBlog />
          </div>
        ) : (
          <div className="col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2">
            {data.map((item: Post, index: number) => (
              <Link key={index} href={`posts/${item.id}`}>
                <PostCard post={item} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
