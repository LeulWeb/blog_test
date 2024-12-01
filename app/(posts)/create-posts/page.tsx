import Container from "@/components/Container";
import { TypographyH1 } from "@/components/typography/TypographyH1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function CreatePost(){
    return (
      <div>
        <Container>
          <main>
            <div className="flex w-full justify-between">
              <Link href="/">
                <Button variant="link">Back</Button>
              </Link>
            </div>

            <div className="text-center">
                <TypographyH1>Create New Post</TypographyH1>

                <form action="" className="max-w-3xl mx-auto text-left">
                    <div className="py-5">
                        <Label>Title</Label>
                        <Input/>
                    </div>
                    <div className="py-4">
                        <Label>Content</Label>
                        <Textarea/>
                    </div>
                    <Button className="w-full">Submit</Button>
                </form>
            </div>
          </main>
        </Container>
      </div>
    );
}