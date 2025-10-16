const Hero = ({}) => {
  return (
    <section className="p-4 md:p-8">
      {/* Bio */}
    <div className="px-4 md:px-8 tracking-normal font-stretch-expanded space-y-3 md:space-y-4 text-lg md:text-2xl leading-relaxed text-black italic">

      <p className="">
      Selam is a <span className="hover:bg-lime-300 pr-0.5 text-blueText font-medium"> designer</span>, <span className="hover:bg-lime-300 pr-0.5 text-blueText font-semibold">engineer</span>, and <span className="hover:bg-lime-300 pr-0.5 text-blueText font-semibold">writer</span>. 
      </p>
      <p>  
      She has four years of experience as a software engineer specializing in <span className="decoration-fuchsia-400 underline underline-offset-[8px] decoration-wavy">observability</span>.
      </p>
      <p>
      Her portfolio spans UI design, marketing, video, and brand development for organizations in education, transportation, and wellness.
      </p>
      <p>
      Selam aims to apply her design and technical skills toward building <span className="bg-lime-300 pr-0.5">technology that serves people responsibly</span>. 
      </p>
      <p>
      Her current interests include <span className="decoration-fuchsia-400 underline underline-offset-[8px]">internet safety</span>, <span className="decoration-fuchsia-400 underline underline-offset-[8px]">AI ethics</span>, and <span className="decoration-fuchsia-400 underline underline-offset-[8px]">edtech</span>.
      </p>
      </div>
    </section>
  );
};

export default Hero;
