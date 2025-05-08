export const SlidingTextCTA = () => {
  return (
    
    <div className="overflow-hidden cursor-pointer group  py-5 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
      <div className="whitespace-nowrap flex animate-marquee">
        {Array.from({ length: 19 }).map((_, i) => (
          <span
            key={i}
            className="text-[300px] font-bold leading-none uppercase flex items-center"
          >
            Work with us
            <span className="mx-10 inline-block w-[200px] h-[2px] group-hover:bg-black bg-gray-500" />
            Let’s chat
            <span className="mx-10 inline-block w-[200px] h-[2px] group-hover:bg-black bg-gray-500" />
          </span>
        ))}
      </div>
    </div>
  );
};
