import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="uppercase h-screen font-bold py-30 grid place-items-center">
      <div className="flex flex-col justify-center gap-2">
        <div>
          <p className="text-8xl">404</p>
          <p className="text-sm text-center">Sorry, Page not Found!</p>
        </div>
        <Button className="rounded-full">
          <Link href={"/"}>Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
}
