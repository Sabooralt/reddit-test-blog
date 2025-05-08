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

  return (
    <div className="py-7 px-10 bg-black text-white flex flex-col justify-between items-center flex-wrap gap-0">
      <div className="flex flex-row items-center justify-between w-full mb-10">
        <div className="flex flex-row items-start gap-32">
          {footerItems.map((section) => (
            <div key={section.title}>
              <h4 className="text-xl  text-gray font-medium mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2 text-2xl">
                {section.links.map((link) => (
                  <li key={link} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center w-full justify-between">
        <h1 className="cursor-pointer text-2xl hover:text-gray ">
          Copyright © Digital Innovation Studio — made by Saksham
        </h1>
       <button className="flex flex-row items-center">
        Back to top <span className="flex items-center justify-center p-5">Arrow</span>
       </button>
      </div>
    </div>
  );
}
