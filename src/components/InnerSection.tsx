export default function InnerSection() {
  return (
    <div className="h-[25vh] sm:h-[40vh]  md:h-[90vh]">
      <div className="fixed -z-10 grid place-items-center justify-center py-7 md:py-20 bg-primary text-secondary w-full">
        <div className="w-32 hidden md:block absolute right-12 -z-10 -top-10">
          <img src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b569253e152a1903565f3_scroll-down.avif" />
        </div>
        <div className="mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl text-center text-nowrap uppercase font-bold leading-tight">
            <span className="block">Understanding</span>
            <span className="block">Webflow CMS</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
