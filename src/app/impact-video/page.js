import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function ImpactVid() {
    return (
        <>
        <NavBar />
      <div className="bg-gray-100 pb-20 border-b-8 border-gray-200">
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col ">
          <div className="mx-auto">
            <div>
              <h1 className="text-purple-800 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl pt-20">
                Impact a Client Reflection Video
              </h1>
              <p className="mt-6 text-zinc-700 sm:text-lg">
                Look below to watch our Reflection video on our Impact a Client project!
              </p>
            </div>


            </div>
        </MaxWidthWrapper>
        </div>

        <div>
            <MaxWidthWrapper>
            <div>
            <div className="mb-16 mx-auto max-w-4xl px-6 lg:px-8">
              <div className="mt-20 flow-root sm:mt-15">
                <div className="items-center justify-center -mt-2 rounded-xl bg-gray-700/5 p-2 ring-1 ring-inset ring-blue-900/10 lg:-m-12 lg:rounded-2xl lg:p-4">
                  <video controls>
                    <source src="impacty.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
          </div>
            </MaxWidthWrapper>
        </div>
        </>
    )
}