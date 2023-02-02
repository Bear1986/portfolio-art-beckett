import BlackWhite from "./BlackWhite";
import Image from "next/image";
import Em from "../public/images/Em.png";
import Chr from "../public/images/Chr.png";
import Rom from "../public/images/Rom.png";
export default function Reviews() {
  const styles = {};
  return (
    <>
      <div className="text-4xl text-center py-10  bg-black text-[#D94D29]">
        <h1>Testimonials</h1>
      </div>
      <div className=" w-full">
      <div className="w-full h-[2px] bg-[#D94D29] " />
        <div className="pt-8 md:flex md:justify-between">
          <div className="md:w-full md:text-center">
            <div className="md:w-full md:flex md:justify-center">
              <BlackWhite
                src={Em}
                delay={200}
                alt="Dr Emily Hill"
                className="w-[10rem]"
              />
            </div>
            <h1 className="text-xl pl-3 text-[#D94D29]">Dr Emily Hill</h1>
            <p className="ml-3 pb-2 md:ml-0 md:mb-0 text-white">
              <strong>
                Professor of Computer Science
                <br />
                founder of the joy of coding Academy{" "}
              </strong>
            </p>
            <section className="bg-white text-[#222A36] p-8 md:mr-0">
              <p>
                In my experience, Arthur is an extremely talented and
                hard-working individual. He has a strong work ethic and is
                always willing to go above and beyond to ensure that tasks are
                completed to the highest standard. When asked to complete tasks,
                he makes sure that he deeply understands the nuances of the task
                to complete it deeply and successfully.
              </p>
            </section>
          </div>
          <div className="md:w-full mx-8 md:text-center">
            <div className="md:w-full md:flex md:justify-center">
              <BlackWhite
                src={Chr}
                delay={200}
                alt="Chris Snoek"
                className="w-[10rem]"
              />
            </div>
            <h1 className="text-xl pl-3 text-[#D94D29]">Chris Snoek</h1>
            <p className="ml-3 pb-2 md:ml-0 md:mb-0 text-white">
              <strong>
                Mentor Front end Development
                <br />
                Front end developer at Huddle BV{" "}
              </strong>
            </p>
            <section className="bg-white text-[#222A36] p-8 ">
              <p>
                Arthur has a broad understanding of the current landscape of
                front end web development. Therefore he is really quick in
                understanding new tools or techniques and when he is assigned a
                task he will make sure to understand it completely before
                delivering which results in high quality work.
              </p>
            </section>
          </div>
          <div className="md:w-full md:text-center">
            <div className="md:w-full md:flex md:justify-center ">
              <BlackWhite
                src={Rom}
                delay={200}
                alt="Romualdo Duarte Soares dos Santos"
                className="w-[10rem]"
              />
            </div>
            <h1 className="text-xl pl-3 text-[#D94D29]">Romualdo Duarte Soares dos Santos</h1>
            <p className="ml-3 pb-2 md:ml-0 md:mb-0 text-white">
              <strong>Senior Dart and Flutter developer</strong>
            </p>
            <section className="bg-white text-[#222A36] p-8">
              <p>
              Arthur
              is always interested in helping other people,
               and developing areas where he can improve. 
              I've enjoyed working with him he is a talented Frontend Developer
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#D94D29] mt-8" />
    </>
  );
}
