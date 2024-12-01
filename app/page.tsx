import { Hero } from "@/components/sections/Hero";
import PostGrid from "@/components/sections/PostsGrid";
import { TypographyH1 } from "@/components/typography/TypographyH1";
import { TypographyH4 } from "@/components/typography/TypographyH4";


export default function Home(){
  return (
    <div className="bg-[#f0eeed]">
      <Hero />
      <div className="flex items-center w-8/12 md:w-10/12 space-x-2 mx-auto p-4  ">
        <div>
          <TypographyH4>Read</TypographyH4>
          <div className="flex space-x-3">
            <TypographyH1>Daily</TypographyH1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5m0 0v-8.816c0-2.985 0-4.477.757-5.525a4 4 0 0 1 .902-.903C6.707 3.5 8.199 3.5 11.184 3.5c.977 0 2.166.051 3.152.064c.899.013 1.349.019 2.186-.13c.838-.147.927-.181 1.106-.25c.77-.292 1.5-.748 2.372-1.184v9.5c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.166c-.735.304-1.667.304-3.531.304H6a2 2 0 0 0-2 2M18 17v5M8 4v4"
                color="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="divide-x-4 h-[1px] w-full bg-stone-800"></div>
      </div>



      <PostGrid/>
    </div>
  );
}