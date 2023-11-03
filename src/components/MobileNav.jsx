import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <h1 className="mb-5">Greenify</h1>
        <div className="flex flex-col gap-3 font-semibold">
          <Link href="/"><Button className="bg-green-800 hover:bg-green-900">Home</Button></Link>
          <Link href="/about"><Button className="bg-green-800 hover:bg-green-900">About Us</Button></Link>
          <Link href="/info-solutions"><Button className="bg-green-800 hover:bg-green-900">Info/Solutions</Button></Link>
          <Link href="/financial"><Button className="bg-green-800 hover:bg-green-900">Financial</Button></Link>
          <Link href="/tips"><Button className="bg-green-800 hover:bg-green-900">Tips</Button></Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
