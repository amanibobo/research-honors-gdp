import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Refrences() {
  return (
    <>
      <div className="pb-20">
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col">
          <div className="mx-auto">
            <div>
              <h1 className="text-purple-800 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl pt-20">
                Refrences
              </h1>
              <p className="mt-6 text-zinc-700 text-xl">
                Links:
                <div className="text-base flex flex-col gap-6 mt-6">
                  <p>
                    {'Abar, Beau, et al. “Associations between Reasons to Attend and Late High School Dropout.” Learning and Individual Differences, vol. 22, no. 6, Dec. 2012, pp. 856–61, https://doi.org/10.1016/j.lindif.2012.05.009. Accessed 15 Dec. 2019.'}
                  </p>
                  <p>
                    {'“Best Practices for Tardy Management in Schools - SchoolMint.” Blog.schoolmint.com, blog.schoolmint.com/best-practices-for-tardy-management-in-schools#:~:text=Tardy%20Management%20Tip%202%3A%20Use. Accessed 7 Nov. 2023.'}
                  </p>
                  <p>
                    {'Zhao, Mingtao, et al. “College Smart Classroom Attendance Management System Based on Internet of Things.” Computational Intelligence and Neuroscience, edited by Guobin Chen, vol. 2022, July 2022, pp. 1–9, https://doi.org/10.1155/2022/4953721. Accessed 21 Nov. 2022.'}
                  </p>
                  <p>
                    {'Richards, Jason. “How to Reduce Tardiness in High Schools.” Minga.io, 30 Mar. 2023, minga.io/how-to-reduce-tardiness-in-high-schools/.'}.
                  </p>
                </div>
              </p>
            </div>
          </div>

          <Link href={"/"}>
            <Button className="bg-purple-800 hover:bg-purple-900 mt-6">
              Back <ArrowRight className="ml-2" size={15} />
            </Button>
          </Link>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
