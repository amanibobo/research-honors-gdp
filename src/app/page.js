import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="bg-gray-100 mb-28">
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center text-center justify-center">
          <div className="text-center">
            <h1 className="max-w-5xl mx-auto text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl pt-20">
              {/*<div className="mx-auto mb-6 max-w-fit overflow-hidden rounded-xl border border-gray-200 bg-white px-4 py-1 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
              <p className="text-sm font-semibold text-gray-700">
                💎 <span className="font-normal text-gray-300">|</span>{" "}
                Neurios is now public!
              </p>
             </div>*/}
              Innovation Academy Honors Research{" "}
              <span className="text-purple-800 italic">Impact a Client</span>{" "}
              Digital Portfolio.
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-zinc-700 sm:text-lg">
              Our groups Impact a Client Digital Portfolio, created by Amani
              Bobo. Group Members: Amani Bobo, Nithin Kumar, Arjun Suresh, and
              Rigved Bhagdikar.
            </p>

            <div className="pb-10">
              <Link href="/impact-video">
                <Button
                  size="lg"
                  className="bg-purple-800 hover:bg-purple-900 mt-6 mr-2"
                >
                  IPAC Video
                </Button>
              </Link>
              <Link href="/prototype">
                <Button size="lg" variant="outline">
                  Prototype
                </Button>
              </Link>
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
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper>
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-6 mt-32">
            Problem Statement
          </h1>
          <p className="text-zinc-700">
            A common, reoccurring theme at Innovation Academy is that students
            come to school late. Whether it is because of traffic, waking up
            late, or any other reason, checking into school late leads to
            students missing out on educational time. At IA, when students come
            late, they have to go to the front desk and check-in via a computer.
            Because many students often come late, a lot of them need to check
            in, thus causing lines for students to wait in.
          </p>

          <h1 className="text-3xl font-semibold mb-6 mt-12">How Might We / Criteria of Success</h1>
          <p className="text-zinc-700 mb-6">
            How might we create a more efficient check-in System for late
            students to get to class faster at Innovation Academy? Our criteria
            of success includes: The check-in system created should be able to
            check in students within 15-20 seconds of arrival, The check in
            system must be able to take in an alternate form of ID, (this can be
            back-up qr codes sent to student’s emails), and Admins and teachers
            should be able to have the late check-ins on record. The check-in
            system using a qr/bar code scanner to pick up student ID codes to
            authorize the individual, send the tardiness notification to the
            admins and the teacher the student has when they come late. Our
            Procedure to get our product was changed throughout and used client
            feedback and iterations we had done.
          </p>

          <Link href="/impact-video">
            <Button className="bg-purple-800 hover:bg-purple-900 mr-2">
              Learn More
            </Button>
          </Link>

          <Link href="/pics-of-work">
            <Button variant="outline">
              The Groups Contributions 
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
