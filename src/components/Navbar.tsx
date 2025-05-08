export default function Navbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Works", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Content", link: "/" },
  ];
  return (
    <nav className="flex p-[2rem] justify-between items-center bg-primary text-white">
      <div className="w-[70px]">
        <img
          alt="Main Logo"
          className="size-full"
          src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a2b401ac029bdcea82c48_logo.avif"
        />
      </div>

      <ul className="flex flex-row">
        {navItems &&
          navItems.map((item, index) => (
            <li
              key={index}
              className="inline-block flex flex-row relative group overflow-hidden font-lg font-[500] text-xl ml-1 text-secondary"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {item.name}
              </span>
              <span>,</span>
              <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:translate-y-[-100%]">
                {item.name}
              </span>

              <span className="absolute bottom-0 left-0 h-[0.5px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
      </ul>
    </nav>
  );
}
