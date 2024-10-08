import heroImage from "../../assets/images/DALL E/image3.webp";
import Residential from "../../assets/images/Residential.png";
import Commercial from "../../assets/images/Commercial.png";
import Industrial from "../../assets/images/Industrial.png";
import { useState } from "react";
const Expertise = () => {
  const [fullWidth, setFullWidth] = useState(false);

  const showfullwidth = (value) => {
    setFullWidth(value);
  }

  return (
    <div
      id="services"
      className="relative text-white font-anton font-normal w-full h-fit overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute z-[-4] top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-black opacity-65"></div>
      <section className="about-section mb-36 w-full mt-5">
        <div className=" text-center mb-8 mx-[9%]  lg:mb-0">

          <div onMouseEnter={() => showfullwidth(true)} onMouseLeave={() => showfullwidth(false)} className='flex flex-col mb-[36px] w-auto relative '>
            <h1 className={`font-anton transition-all duration-500 text-white  text-left text-[29px] md:text-[38px]`}>Area Of Expertise</h1>
            <span className={`z-50 duration-500 h-[12px] md:h-[16px] ${fullWidth ? "w-[100px] " : "w-[200px]  md:w-[290px]"} transition-all bg-customGold`} ></span>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" group">
              <div className="rounded-2xl shadow-lg bg-white min-h-[288px] md:min-h-[368px] text-center p-6 m-4 flex flex-col items-center ">
                <div
                  className="-mt-12 -top-2 left-1/2 transform -translate-y-1/4
                            transition-transform duration-[500] group-hover:scale-150"
                >
                  <img src={Residential} alt="" className="h-16" />
                </div>
                <h2 className="text-2xl  mb-2 grid-cols-2 text-[#2F327D]">
                  Residential
                </h2>
                <p className="text-black text-base">
                  Experience the benefits of foam insulation spray for your
                  residence. Our premium solution increases energy efficiency
                  and comfort by forming an impermeable barrier. Trust our
                  expert technicians for meticulous installations, enhancing
                  soundproofing. Suitable for walls, attics, and crawl spaces.
                  Contact us for a consultation to transform your home into an
                  insulated sanctuary.
                </p>
              </div>
            </div>


            <div className="rounded-2xl group shadow-lg bg-white min-h-[288px] md:min-h-[368px] text-center p-6 m-4 flex flex-col items-center ">
              <div
                className="-mt-12 -top-2 left-1/2 transform -translate-y-1/4 
                            transition-transform duration-[5000] group-hover:scale-150"
              >
                <img src={Commercial} alt="" className="h-16" />
              </div>
              <h2 className="text-2xl  mb-2 grid-cols-2 text-[#2F327D]">
                Commercial
              </h2>
              <p className="text-black text-base">
                Enhance your commercial space with our spray foam insulation
                service. Our expert staff creates hermetic barriers using
                spray insulation foam. Improve soundproofing, reduce heat
                transfer, and cut energy expenses for a more comfortable
                workplace. Schedule a consultation today to discover the
                advantages of our commercial insulation solutions. Contact
                us now!
              </p>
            </div>

            <div className="">
              <div className="rounded-2xl h-fit  shadow-lg bg-white min-h-[288px] md:min-h-[368px]  text-center p-6 m-4 flex flex-col items-center group">
                <div className="-mt-12   -top-2 left-1/2 transform -translate-y-1/4 transition-transform duration-[5000] group-hover:scale-150">
                  <img src={Industrial} alt="" className="h-16" />
                </div>
                <h2 className="text-2xl  mb-2 grid-cols-2 text-[#2F327D]">
                  Industrial
                </h2>
                <p className="text-black text-base">
                  Enhance your industrial facility&apos;s efficiency with our
                  premium foam insulation spraying service. Our experienced
                  team specializes in spray foam wall insulation, establishing
                  a watertight barrier for optimal thermal efficiency. Improve
                  soundproofing, reduce energy loss, and utility costs for a
                  more productive workplace environment. Contact us now for
                  dependable, effective industrial insulation solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Expertise;
