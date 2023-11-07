import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

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
                Look below to watch our Reflection video on our Impact a Client
                project!
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-6 mt-20">
            Work of Each Member
          </h1>

          <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-xl font-semibold">Amani</span>
                <span className="mt-2 text-zinc-700">
                  Worked on developing and coding our Group Digital Portfolio
                  and mainly contributed on the prototype. Also conducted user
                  interviews.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-xl font-semibold">Arjun</span>
                <span className="mt-2 text-zinc-700">
                  Worked on and completed the Planning Document and conducted
                  user interviews.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-xl font-semibold">Nithin</span>
                <span className="mt-2 text-zinc-700">
                  Helped to create the problem statement and research
                  question(s). Also conducted user interviews.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-xl font-semibold">Rigved</span>
                <span className="mt-2 text-zinc-700">
                  Helped to conduct User Interviews and created our measureable
                  criteria for success.
                </span>
              </div>
            </li>
          </ol>
        </div>

          <div>
            <div className="mb-16 mx-auto max-w-4xl px-6 lg:px-8">
              <div className="mt-20 flow-root sm:mt-15">
                <div className="items-center justify-center -mt-2 rounded-xl bg-gray-700/5 p-2 ring-1 ring-inset ring-blue-900/10 lg:-m-12 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/rig-nith.jpg"
                    width="1419"
                    height="732"
                    quality="100"
                    alt="iap"
                  />
                </div>
              </div>
            </div>
            <p className="text-zinc-700">Rigved and Nithin Conducting User interview</p>
          </div>

          <div>
            <div className="mb-16 mx-auto max-w-4xl px-6 lg:px-8">
              <div className="mt-20 flow-root sm:mt-15">
                <div className="items-center justify-center -mt-2 rounded-xl bg-gray-700/5 p-2 ring-1 ring-inset ring-blue-900/10 lg:-m-12 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/amani-coding.jpeg"
                    width="1419"
                    height="732"
                    quality="100"
                    alt="iap"
                  />
                </div>
              </div>
              <p className="text-white font-semibold">Rigved and Nithin Conducting User interview</p>

            </div>
          </div>

          <div>
            <div className="mb-16 mx-auto max-w-4xl px-6 lg:px-8">
              <div className="md:-mt-[394px] mt-20 flow-root sm:mt-15">
                <div className="items-center justify-center -mt-2 rounded-xl bg-gray-700/5 p-2 ring-1 ring-inset ring-blue-900/10 lg:-m-12 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/rig-nith.jpg"
                    width="1419"
                    height="732"
                    quality="100"
                    alt="iap"
                  />
                </div>
              </div>
              <p className="text-white font-semibold">Rigved and Nithin Conducting User interview</p>
            </div>
          </div>

        <div>
            <div className="mb-16 mx-auto max-w-4xl px-6 lg:px-8">
              <div className="mt-20 flow-root sm:mt-15">
                <div className="items-center justify-center -mt-2 rounded-xl bg-gray-700/5 p-2 ring-1 ring-inset ring-blue-900/10 lg:-m-12 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/rig-nith.jpg"
                    width="1419"
                    height="732"
                    quality="100"
                    alt="iap"
                  />
                </div>
              </div>
              <p className="text-white font-semibold">Rigved and Nithin Conducting User interview</p>
            </div>
          </div>
      </MaxWidthWrapper>
    </>
  );
}
