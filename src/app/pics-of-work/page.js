import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import NavBar from "@/components/NavBar"

export default function PicsWork() {
    return (
        <>
            <NavBar />
            <div className="bg-gray-100 pb-20 border-b-8 border-gray-200">
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col ">
          <div className="mx-auto">
            <div>
              <h1 className="text-purple-800 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl pt-20">
                Our Contributions & Work for IPAC
              </h1>
              <p className="mt-6 text-zinc-700 sm:text-lg">
                Look below to watch our Reflection video on our Impact a Client project!
              </p>
            </div>


            </div>
        </MaxWidthWrapper>
        </div>

        </>
    )
}