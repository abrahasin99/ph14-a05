import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <hr className="border-t border-gray-200" />
      <div className="grid grid-cols-1 gap-10 px-4 py-12 font-jakarta text-[#64748B] sm:grid-cols-2 sm:px-6 md:px-12 lg:grid-cols-4 lg:gap-6 lg:px-22 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={FooterLogo} className="pb-2" alt="footer-logo" />
          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
            <a
              href="https://github.com/abrahasin99"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              GitHub
            </a>
            <a
              href="https://x.com/abrahasin99"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/abu-raihan-tashin-704a37266/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="grid gap-1">
          <h2 className="font-bold text-[#0F172A]">PRODUCT</h2>
          <a href="">Home</a>
          <a href="">Technologies</a>
          <a href="">Projects</a>
        </div>
        <div className="grid gap-1">
          <h2 className="font-bold text-[#0F172A]">COMPANY</h2>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Careers</a>
        </div>
        <div className="grid gap-1">
          <h2 className="font-bold text-[#0F172A]">LEGAL</h2>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="flex flex-col items-center gap-4 px-6 py-8 text-center text-[#94A3B8] font-jakarta sm:flex-row sm:justify-between sm:text-left">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
