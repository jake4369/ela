import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
// import { FaBroom, FaSeedling } from "react-icons/fa";
import { FaBroom, FaDroplet, FaSeedling } from "react-icons/fa6";

const services = [
  {
    icon: <FaBroom />,
    heading: "Hard Surface Cleaning",
    description:
      "We specialise in cleaning block paving, concrete, decking, natural stone, brickwork and roofs using the latest professional cleaning equipment.",
  },
  {
    icon: <FaDroplet />,
    heading: "Concrete Print Treatment",
    description:
      "We specialise in cleaning block paving, concrete, decking, natural stone, brickwork and roofs using the latest professional cleaning equipment.",
  },
  {
    icon: <FaSeedling />,
    heading: "Sealing & Weeding",
    description:
      "We specialise in cleaning block paving, concrete, decking, natural stone, brickwork and roofs using the latest professional cleaning equipment.",
  },
];

const ServiceCard = ({ icon, heading, description }) => {
  return (
    <div className="flex flex-col text-center items-center justify-center mb-20  lg:w-[31.5315315315%] lg:text-left">
      <div className="flex items-center justify-center text-4xl rounded-full bg-[#96A9C6] w-[86px] h-[86px] mb-8">
        {icon}
      </div>
      <h4 className="text-2xl mb-2">{heading}</h4>
      <p>{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="flex flex-col w-[87.2%] md:w-[77.0833333333%] text-center mx-auto mb-60">
      <h2 className="text-3xl md:text-5xl mb-14  text-center">Our Services</h2>

      <p className="mb-20">
        We offer expert pressure washing, steam cleaning and surface care to
        refresh and protect your property. From deep cleaning tough stains to
        gentle soft washing for delicate surfaces, we handle it all. Our
        services include roof scraping, chemical treatments, biocide
        applications, and professional sealing to maintain durability and
        appearance. We also offer driveway leveling and patio re-pointing for a
        flawless finish.
      </p>

      <div className="lg:flex items-center justify-between">
        {services.map((obj) => (
          <ServiceCard
            key={obj.heading}
            icon={obj.icon}
            heading={obj.heading}
            description={obj.description}
          />
        ))}
      </div>

      <p className="mb-8">
        Click <strong>"Learn More"</strong> to see how we can enhance your
        outdoor spaces!
      </p>
      <Link href="/services" className="mx-auto">
        <HoverBorderGradient className="py-4 px-8">
          Learn More
        </HoverBorderGradient>
      </Link>
    </section>
  );
};

export default Services;
