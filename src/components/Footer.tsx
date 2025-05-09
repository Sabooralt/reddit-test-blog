export default function Footer() {
  const footerItems = [
    {
      title: "Sitemap",
      links: ["Home", "Work", "About", "Blog"],
    },
    {
      title: "Legal",
      links: ["Licensing", "Changelog"],
    },
    {
      title: "Social",
      links: ["Instagram", "LinkedIn", "Facebook"],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-7 pb-1 px-2 md:px-10 bg-black text-white flex flex-col justify-between items-center flex-wrap gap-0">
      <div className="flex gap-10 lg:gap-0 lg:flex-row flex-col-reverse items-center justify-between w-full mb-10">
        <div className="flex flex-col  lg:flex-row lg:w-fit w-full items-start gap-10 lg:gap-32">
          {footerItems.map((section) => (
            <div key={section.title}>
              <h4 className="text-xl  text-gray font-medium mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2 text-2xl">
                {section.links.map((link) => (
                  <div className="relative group w-fit" key={link}>
                    <li key={link} className="cursor-pointer">
                      {link}
                    </li>
                    <span className="absolute bottom-0 left-0 h-[0.5px] w-0 bg-gray transition-all duration-200 group-hover:w-full"></span>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full lg:w-fit lg:max-w-sm lg:justify-normal justify-start lg:items-center">
          <div className="flex p-2 gap-2 bg-slate-50 flex-row items-center justify-between">
            <img
              className="size-8"
              src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a1dc3f9c27f98c24c37cb_paper-planes.avif"
            />

            <input
              className="text-lg font-[500] focus:outline-none bg-slate-50 text-black placeholder:text-black w-full"
              placeholder="E-mail"
            />
            <button className="size-full font-[500] p-5 h-full uppercase bg-[#2b20ff] hover:bg-blue-800 transition-colors duration-300 text-white ">
              Get notified
            </button>
          </div>

          <div className="flex flex-row items-center gap-2 w-full mt-5">
            <input type="checkbox" className="size-4" />
            <label className="text-gray">
              I agree to the Terms & Conditions
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row  sm:items-center w-full  gap-5 sm:gap-10 sm:justify-between">
        <h1 className="cursor-pointer text-white/90 text-xl hover:text-gray ">
          Copyright © Digital Innovation Studio — made by Saksham
        </h1>
        <button
          onClick={scrollToTop}
          className="flex group text-nowrap text-lg items-end text-white/90 text-xl hover:text-gray duration-300 transition-colors gap-3"
        >
          Back to top
          <span className="relative flex items-center justify-center p-2  border border-white/60 overflow-hidden size-8">
            <span className="absolute inset-0 flex group-hover:text-gray items-center justify-center transition-transform duration-300 group-hover:-translate-x-full">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="absolute inset-0 flex items-center justify-center translate-x-full transition-transform duration-300 group-hover:translate-x-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
