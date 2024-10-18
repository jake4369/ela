import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { SimpleCTAWithImages } from "../ui/cta";

const CTA = () => {
  return (
    <BackgroundBeamsWithCollision>
      <SimpleCTAWithImages />
      {/* <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Get a <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Free, No Obligation</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Free, No Obligation</span>
          </div>
        </div>
        <br /> Quote!
      </h2> */}

      {/* <div>
        <p>
          Ready to restore the look of your home or business? Contact us now for
          a free, no-obligation quote and see how our professional pressure
          washing services can make a difference!
        </p>
      </div> */}
    </BackgroundBeamsWithCollision>
  );
};

export default CTA;
