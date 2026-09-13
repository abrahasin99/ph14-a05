import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <nav className="flex justify-between items-center font-jakarta px-22 py-4 bg-white border-b border-neutral-200 rounded-none w-full sticky top-0 z-50">
        <img src={Logo} alt="logo" className="h-9 w-auto" />
        <ul className="flex gap-4 items-center text-[#475569]">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4">
          <button className="text-[#334155]">Sign In</button>
          <button className="bg-[#DB2777] text-white px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
