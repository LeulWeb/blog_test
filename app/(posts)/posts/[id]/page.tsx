"use client";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import { TypographyH2 } from "@/components/typography/TypographyH2";
import { TypographyP } from "@/components/typography/TypographyP";
import { Button } from "@/components/ui/button";
import { useFetchPostById } from "@/queries/post_query";
import Link from "next/link";
import { LoadingBlog } from "@/components/sections/LoadingCard";

// Define types for Post and PostDetailPage props


type Params = {
  id: string;
};

type PostDetailPageProps = {
  params: Promise<Params>;
};

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => setId(resolvedParams.id));
  }, [params]);

  const {
    data: post,
    isLoading,
    error,
  } = useFetchPostById(id ? parseInt(id) : 0);

  console.log(post, error);

  return (
    <Container>
      <div className="flex w-full justify-between">
        <Link href="/">
          <Button variant="link">Back</Button>
        </Link>
      </div>

      {isLoading ? (
        <LoadingBlog />
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-10">
          <TypographyH2>Error Loading Post</TypographyH2>
          <div>
            <TypographyP>
              {error.message ||
                "An unexpected error occurred. Please try again."}
            </TypographyP>
          </div>
        </div>
      ) : (
        <main className="flex flex-col justify-center items-center text-center">
          <div>
            <TypographyH2>{post?.title || "No title available"}</TypographyH2>
            <img
              src={
                post?.image ||
                "https://img.freepik.com/free-photo/junior-developer-sitting-down-desk-showing-laptop-with-source-code-senior-dev-asking-opinion-programer-writing-algorithm-interrupted-by-colleague-wanting-help-with-fixing-errors_482257-41823.jpg"
              }
              alt="Post Image"
              className="rounded-xl max-w-3xl"
            />
          </div>

          <div className="max-w-3xl text-justify py-5">
            <TypographyP>
              {post?.description || "No content available"}
            </TypographyP>
          </div>
        </main>
      )}
    </Container>
  );
}
