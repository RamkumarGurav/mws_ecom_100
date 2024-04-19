import { tweenAnimateFromLeft10 } from "@/utils/variants";
import AnimatedDiv from "../AnimatedComponents/AnimatedDiv";

export default function Header() {
  return (
    <section
      id="header"
      className={` sm:px-[15px] xl:px-[20px]  h-[400px] sm:min-h-screen`}
    >
      <div className={` px-4 mx-auto   `}>
        <div className="grid sm:grid-cols-3">
          <AnimatedDiv
            variants={tweenAnimateFromLeft10}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            className="sm:px-10  pt-20  sm:col-span-2"
          >
            <p className="text-[20px] md:text-[40px]  text-white  merriweather font-semibold">
              Full Stack Developer
            </p>
            <h1 className="text-[30px] md:text-[50px] lg:text-[60px] text-white merriweather font-semibold  flex flex-col sm:flex-row ">
              <span> Hi, I&apos;m </span>
              <span className="sm:ml-4 text-[40px] lg:text-[60px] text-color1 merriweather font-semibold ">
                Ramkumar
              </span>
            </h1>

            <h2 className="text-[40px] lg:text-[60px] text-white merriweather font-semibold">
              <span className=" merriweather font-semibold text-white sm:text-white ">
                Shrikant{" "}
              </span>
              <br />
            </h2>
            <h2 className="text-[40px] lg:text-[60px] text-white merriweather font-semibold">
              <span className=" merriweather font-semibold text-white sm:text-white ">
                {" "}
                Gurav
              </span>
              <br />
            </h2>
          </AnimatedDiv>
          <div className={``}></div>
        </div>
      </div>
    </section>
  );
}
