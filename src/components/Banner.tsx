import Bannerlogo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <>
        <div className="flex justify-around items-center gap-7">
            <div className="grid gap-7">
                <h1 className="text-6xl font-black">Build Your Ideal<br></br><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-6xl] rounded-xl">Development Stack</span></h1>
                <p className="text-lg text-[#475569] font-jakarta">Explore frontend, backend, database, and tooling options,<br></br> compare them side by side, and put together the stack that fits your<br></br> next project.</p>
                <div className="flex gap-3 mt-10">
                    <button className="text-sm px-3 py-1 text-white font-semibold rounded-xl bg-gradient-to-r from-[#F97316] to-[#EC4899] hover:opacity-90 transition-opacity">Explore Technologies</button>
                    <button className="text-base text-[#374151] px-10 py-3 bg-white border border-gray-300 rounded-lg">Learn More</button>
                </div>
            </div>
            <img src={Bannerlogo} alt="banner-logo" />
        </div>
        </>
    );
};

export default Banner;