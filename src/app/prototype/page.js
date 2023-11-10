import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Prototype() {
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 pb-20 border-b-8 border-gray-200">
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col ">
          <div className="mx-auto">
            <div>
              <h1 className="text-purple-800 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl pt-20">
                IA Late Student Barcode Scanner
              </h1>
              <p className="mt-6 text-zinc-700 sm:text-lg">
                Read below to learn more about the development of this project!
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-6 mt-20">
            Development of Application
          </h1>
          <p className="text-zinc-700 mb-6">
            The prototype is a live camera that can scan a qr/barcode of a
            students id. The software can identify if the user is authorized or
            not based on dummy data that is stored in a text file. To develop
            the protoype we used Python and the Flask framework to create a
            website, and the site is being hosted on Netlify. Once the barcode
            is scanned, the user is prompted with a dropdown box of reasons why
            they were late. Once they choose a reason on why they were late,
            they can hit the submit button and then the students id and reason
            is sent to a Mongo DB database which I (Amani Bobo) am working on
            creating a way to send that data to an admins email/infinite campus.
          </p>

          <Link
            href="https://github.com/amanibobo/BarcodeScanny"
            target={"_blank"}
          >
            <Button className="bg-purple-800 hover:bg-purple-900 mr-2">
              Learn More Here
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-semibold mb-6 mt-20">Video Demo of App</h1>

        <div>
          <div className="mb-16 mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mt-20 flow-root sm:mt-15">
              <div className="items-center justify-center -mt-2 rounded-xl bg-gray-700/5 p-2 ring-1 ring-inset ring-blue-900/10 lg:-m-12 lg:rounded-2xl lg:p-4">
                <video autoPlay muted loop>
                  <source src="Presentation1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
