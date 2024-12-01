
import Link from "next/link";
import Container from "../Container";
import { TypographyH1 } from "../typography/TypographyH1";
import { TypographyH4 } from "../typography/TypographyH4";

import { TypographyP } from "../typography/TypographyP";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <Container>
      <div className=" flex flex-col md:flex-row mx-auto space-x-3 items-center  my-5">
        <div className="rounded-md ">
          <img
            src="https://images.unsplash.com/photo-1693328394659-e0782c606d25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-2xl"
          />
        </div>

        <div className="max-w-xl">
          <TypographyH1>Explore More Contents</TypographyH1>
          <div className="pt-1">
            <TypographyH4>Place to Expand your skill</TypographyH4>
          </div>
          <TypographyP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            obcaecati in magnam ipsam dolores quis optio, consequuntur at eius
            neque, asperiores, repudiandae possimus distinctio ad? Sequi
            laboriosam itaque ad neque.
          </TypographyP>

          <div className="flex space-x-2 py-5">
            <Link href="/posts">
              <Button className="py-6">Read Blog</Button>
            </Link>
            <Link href="/create-posts">
              <Button variant="secondary" className="py-6">
                Create Post
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
