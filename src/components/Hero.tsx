const Hero = ({}) => {
  return (
    <section className="p-4 md:p-8">
      {/* Bio */}
    <div className="px-4 md:px-8 tracking-normal font-stretch-expanded space-y-3 md:space-y-4 text-xl md:text-2xl leading-relaxed text-black italic">

      <p className="">
        Selam is a <span className="hover:bg-lime-300 pr-0.5"> designer</span>, <span className="hover:bg-lime-300 pr-0.5">engineer</span>, and <span className="hover:bg-lime-300 pr-0.5">writer</span>. 
      </p>
      <p>  
      She has four years of engineering experience on an observability team at a Fortune 500 company. 
      </p>
      <p>
        During that time, she discovered a love of UX/UI design that she has
        brought to clients working in education, transporation, and wellness. 
      </p>
      </div>
    </section>
  );
};

export default Hero;
