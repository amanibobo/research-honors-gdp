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
                    {'https://www.energy.gov/eere/articles/bioenergy-renewable-sustainable-attainable'}
                  </p>
                  <p>
                    {'https://www.chartjs.org/docs/latest/samples/title/alignment.html'}
                  </p>
                  <p>
                    {'https://www.epa.gov/energy/clean-energy-programs#renewable'}
                  </p>
                  <p>
                    {'https://psc.ga.gov/utilities/electric/purple-power-pricing/#:~:text=The%20Simple%20Solar%20Program%20enables,resources%20on%20the%20customer'}.
                  </p>
                  <p> {'https://www.energystar.gov/saveathome'} </p>
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
