const MainButton = ({
  text,
  secondary,
}: {
  text: string;
  secondary?: string;
}) => {
  return (
    <button className="cursor-pointer group relative bg-white hover:bg-zinc-300 text-black font-semibold text-sm px-6 py-1.5 rounded-full transition-all duration-200 ease-in-out w-fit h-11">
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            {text}
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            {secondary ? secondary : "Explore"}
          </span>
        </span>

        <svg
          className="w-5 h-5 transition-transform duration-200 group-hover:rotate-45"
          viewBox="0 0 24 24"
        >
          <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="white"
            d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default MainButton;
