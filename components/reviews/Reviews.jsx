import { SparklesCore } from "../ui/sparkles";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function Sparkles() {
  return (
    <div className="h-[30rem] w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h2 className="md:text-7xl text-4xl lg:text-7xl font-bold text-center text-white relative z-20 mb-4">
        Customer Satisfaction <br /> Matters
      </h2>
      <div className="w-[40rem] h-40 relative" aria-hidden="true">
        {" "}
        {/* Hide this from screen readers */}
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Fantastic results. We have recently had our drive and roof steam cleaned and the results are amazing!! It's completely transformed our house. Tom offers a very unique service with the equipment he uses and the knowledge he has. The team at ELA were professional and courteous of our neighbours. We will definitely be using this company again in the future. Thanks, guys.",
    name: "Noble Lofts ltd",
  },
  {
    quote:
      "Excellent quality of workmanship, communication great! Really happy with the finished product.",
    name: "NarelleP",
  },
  {
    quote:
      "Can’t speak highly enough of Tom. Completely changed the look of our drive from terracotta red to slate grey. Nothing was too much trouble, and he bent over backwards to make sure we were happy with everything. We’ll be using Tom for all our cleaning of patio, etc. Lovely man would 100% recommend.",
    name: "AndrewG-1288",
  },
  {
    quote:
      "Tom has done a fantastic job cleaning my rear patio and then cleaning and resealing/painting my drive. He’s a lovely young man and worked hard doing a great job. Highly recommend.",
    name: "AnnM-665",
  },
  {
    quote:
      "Tom is a very pleasant man, very professional. He cleaned my roof, which came out 10/10. Then he cleaned all my drive; my gravel had a lot of discolouration due to the leaves on them, and he got it all off. Excellent service.",
    name: "Aimee",
  },
];

const Reviews = () => {
  return (
    <section
      className="w-[87.2%] mx-auto lg:w-[77.0833333333%]"
      id="testimonials"
    >
      <Sparkles />
      <p className="text-center mb-8 md:mb-16 md:w-[77.0833333333%] lg:w-[70%] mx-auto">
        You matter to us and your satisfaction is our top priority. Every job is
        an opportunity to earn your trust and show our commitment to excellent
        service. Your support drives our growth and success, and we’re grateful
        to be part of keeping your property looking its best.
      </p>

      <InfiniteMovingCards items={testimonials} speed="slow" />
    </section>
  );
};

export default Reviews;
