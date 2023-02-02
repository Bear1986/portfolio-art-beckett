/* eslint-disable react/no-unescaped-entities */

import About from "./About";
import Reviews from "./Reviews";
import Work from "./Work";

export default function HomeBody() {
  const styles = {};
  return (
    <>
      <div className="flex justify-center bg-black">
        <div className="speech mt-16 max-w-3xl duration-300 hover:scale-110">
          <div className="p-7 ml-[2.3rem] mr-[1.5rem]">
            <h1 className="text-3xl pb-3 flex justify-center mt-12">
              Hi, I'm{" "}
              <span className="text-[#D94D29] pl-2">
                <h1> Art Beckett</h1>
              </span>
            </h1>
            <div className="p-8 text-lg border-2 border-[#D94D29] drop-shadow-2xl">
              <p>
                I'm a Frontend developer with a passion for building
                user-friendly websites Based in the UK, Swindon.{" "}
              </p>
              <br></br>
              <p>
                Since 2021, I've been helping clients and businesses bring their digital
                visions to life, from custom applications to landing pages and
                e-commerce sites.
              </p>
              <br></br>
              <p>
                My goal is to make sure that every website I work on is fast,
                responsive, and easy to use for everyone. Whether you need a new
                website or a hand with a project, I'm here to help! Let's chat
                and see how we can work together.
              </p>
              
            </div>
          </div>
        </div>
      </div>
<Reviews/>
<About/>
<Work/>
    </>
  );
}
