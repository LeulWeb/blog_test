import { Skeleton } from "../ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "../ui/card";

export const LoadingBlog = () => {
  return (
    <section>
      <div className="">
        <SkeletonDemo />
      </div>
    </section>
  );
};

export function SkeletonDemo() {
  return (
    <div className="bg-white">
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="bg-stone-200 h-6" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="bg-stone-200 w-44 h-4" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="bg-stone-200  h-44" />
        </CardContent>
        <CardFooter>
          <Skeleton className="bg-stone-200 w-44 h-4" />
        </CardFooter>
      </Card>
    </div>
  );
}
