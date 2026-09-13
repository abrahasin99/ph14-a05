import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <hr className="border-t border-gray-200"></hr>
      <div className="flex justify-around gap-6 py-20 font-jakarta text-[#64748B]">
        <div>
          <img src={FooterLogo}></img>
          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <br></br>
          <a href="https://github.com/abrahasin99" target="_blank" className="font-bold pr-3">GitHub</a>
          <a href="https://x.com/abrahasin99" target="_blank" className="font-bold pr-3">Twitter</a>
          <a href="https://www.linkedin.com/in/abu-raihan-tashin-704a37266/" target="_blank" className="font-bold">LinkedIn</a>
        </div>
        <div className="grid gap-1">
          <h2 className="font-bold text-[#0F172A]">PRODUCT</h2>
          <p>Home</p>
          <p>Technologies</p>
          <p>Projects</p>
        </div>
        <div className="grid gap-1">
          <h2 className="font-bold text-[#0F172A]">COMPANY</h2>
          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
        <div className="grid gap-1">
          <h2 className="font-bold text-[#0F172A]">LEGAL</h2>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <hr className="border-t border-gray-200"></hr>
      <div className="flex justify-between px-6 py-10 text-[#94A3B8] font-jakarta">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-2">
        <p>Privacy</p>
        <p>Terms</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
