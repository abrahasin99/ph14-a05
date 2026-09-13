import Bannerlogo from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-4 py-10 sm:px-6 md:px-12 lg:flex-row lg:justify-around lg:gap-7 lg:px-22 lg:py-16">
      <div className="grid gap-5 text-center sm:gap-7 lg:text-left">
        <h1 className="text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="rounded-xl bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="font-jakarta text-base text-[#475569] sm:text-lg">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-10 lg:justify-start">
          <button className="rounded-xl bg-gradient-to-r from-[#F97316] to-[#EC4899] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-3 sm:py-1">
            Explore Technologies
          </button>
          <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-base text-[#374151] sm:px-10 sm:py-3">
            Learn More
          </button>
        </div>
      </div>
      <img
        src={Bannerlogo}
        alt="banner-logo"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
    </div>
  );
};

export default Banner;
