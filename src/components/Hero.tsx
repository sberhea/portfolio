const Hero = ({}) => {
  return (
    <section className="p-4 md:p-8">
      {/* Bio */}
    <div className="px-4 md:px-8 tracking-normal font-stretch-expanded space-y-3 md:space-y-4 text-lg md:text-2xl leading-relaxed text-black italic">

      <h3 className="">
      Selam is a <span className="hover:bg-lime-300 pr-0.5 text-blueText font-semibold"> designer</span>, <span className="hover:bg-lime-300 pr-0.5 text-blueText font-semibold">engineer</span>, and <span className="hover:bg-lime-300 pr-0.5 text-blueText font-semibold">writer</span>. 
      </h3>
      <h3>  
      She has four years of experience as a software engineer specializing in observability.
      </h3>
      <h3>
      Her portfolio spans UI design, marketing, video, and brand development for organizations in education, transportation, and wellness.
      </h3>
      </div>
    </section>
  );
};

export default Hero;
