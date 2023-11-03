import { ArrowRight, CircuitBoard, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NavigationMenuDemo } from "./navvy";
import NavWidthWrapper from "./NavWidthWrapper";
import { Button } from "./ui/button";
import researrch from "../../public/iaresearch.png"

export default function NavBar() {
  return (
    <>
      <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <NavWidthWrapper>
          <navoth className="flex h-16 items-center justify-between border-b border-zinc-200">
            <Link className="flex z-40 font-semibold " href="/">
              <span>
                <Image src={researrch} width={50} height={50} />
              </span>
            </Link>
            <div className="hidden items-center space-x-4 sm:flex">
              <NavigationMenuDemo />
            </div>
            <div className="md:hidden">
            <MobileNav />
            </div>
            <div className="hidden items-center space-x-4 sm:flex">
              <Link href="https://github.com/amanibobo/research-honors-gdp" target={"_blank"}>
                <Button className="bg-purple-800 hover:bg-purple-900">
                  Source Code
                </Button>
              </Link>
            </div>
          </navoth>
        </NavWidthWrapper>
      </nav>
    </>
  );
}
