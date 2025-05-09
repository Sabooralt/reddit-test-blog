
export default function BlogSection() {
  return (
    <section className="w-full px-2 pt-5 bg-white">
      <div className="w-full sm:px-2 h-[80vh] overflow-hidden relative">
        <img
          className="size-full object-cover"
          src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c3703/673355c9219625249d17bf76_service-1-big.avif"
        />
      </div>
      {/* Blog */}
      <div className="w-full mx-auto max-w-xl gap-5 text-start py-20 font-[500]  flex flex-col ">
        <p className="text-lg leading-[1.2]">
          In today's digital world, managing website content efficiently is
          crucial for businesses of all sizes. A Content Management System (CMS)
          is the backbone of modern web content management, allowing
          organizations to create, edit, organize, and publish digital content
          without extensive technical knowledge.
        </p>
        <h1 className="text-[44px] font-semibold tracking-tighter">
          What is a CMS?
        </h1>
        <p className="text-lg leading-[1.2]">
          A Content Management System is a software application that enables
          users to build and manage a website without needing to code it from
          scratch. It provides a user-friendly interface for creating and
          modifying content, managing users, and controlling how content is
          displayed.
        </p>
        <p className="text-lg leading-[1.2]">
          Modern CMS platforms offer features like drag-and-drop editors, media
          management, user role management, and built-in SEO tools. This makes
          it possible for teams to collaborate effectively and maintain a
          consistent online presence.
        </p>
        <p className="text-lg leading-[1.2]">
          One of the biggest advantages of using a CMS is the separation of
          content from design. This means content creators can focus on writing
          and organizing information while developers can work on the technical
          aspects of the website independently.
        </p>
        <p className="text-lg leading-[1.2]">
          Security is another crucial aspect of content management. Leading CMS
          platforms provide robust security features, regular updates, and
          protection against common web vulnerabilities.
        </p>
        <h1 className="text-[44px] font-semibold tracking-tight">
          Types of CMS Platforms
        </h1>

        <ul className="grid gap-1 list-disc list-inside leading-[1.4] marker:m-0">
          <li>
            Traditional CMS: Platforms like WordPress and Drupal that handle
            both content management and content delivery
          </li>
          <li>
            Headless CMS: Modern systems that separate content management from
            content delivery, offering more flexibility for multi-channel
            publishing
          </li>
          <li>
            Hybrid CMS: Systems that combine traditional and headless approaches
            for maximum versatility
          </li>
        </ul>
        <h3 className="text-lg">When choosing a CMS, consider factors like:</h3>

        <ul className="grid gap-1 list-disc list-inside leading-[1.4] marker:m-0">
          <li>Ease of use and learning curve</li>
          <li>Scalability and performance</li>
          <li>Available plugins and extensions</li>
          <li>Community support and resources</li>
          <li>Cost and licensing</li>
        </ul>

        <h1 className="leading-[1.2] tracking-tightest uppercase text-2xl font-bold border-l-2 border-[#2018bf] pl-3  opacity-100">
          A well-chosen CMS is not just a tool; <br /> it's a strategic asset
          that can drive your organization's digital success.
        </h1>

        <p className="text-lg leading-[1.2]">
          The future of content management systems is evolving with emerging
          technologies like AI-powered content creation, advanced
          personalization, and improved integration capabilities. Staying
          informed about these developments can help organizations make better
          decisions about their content management strategy.
        </p>
      </div>
    </section>
  );
}
