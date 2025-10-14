const Hero = ({}) => {
  return (
    <section className="p-4 md:p-8">
      {/* Bio */}
    <div className="px-4 md:px-8 tracking-normal font-stretch-expanded space-y-3 md:space-y-4 text-xl md:text-2xl leading-relaxed text-black italic">

      <p className="">
      Selam is a <span className="hover:bg-lime-300 pr-0.5"> designer</span>, <span className="hover:bg-lime-300 pr-0.5">engineer</span>, and <span className="hover:bg-lime-300 pr-0.5">writer</span>. 
      </p>
      <p>  
      She has four years of experience as a software engineer specializing in observability at a Fortune 500 company.
      </p>
      <p>
      Her portfolio spans UI design, marketing materials, video, and brand development for organizations in education, transportation, and wellness.
      </p>
      <p>
      Selam aims to apply her interpersonal and technical skills toward building technology that serves people responsibly. 
      </p>
      <p>
      Her current interests include internet safety, AI ethics and governance, and edtech.
      </p>
      </div>
    </section>
  );
};

export default Hero;
