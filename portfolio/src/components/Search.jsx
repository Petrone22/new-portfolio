import React from "react";
const Search = ({ quote, search }) => {
  return (
    <div className="relative search-card border border-purple-800 w-fit  p-1 md:min-h-fit md:h-12 md:max-h-fit shrink-0 text-textClr rounded-md flex gap-1 justify-between items=center text-sm md:mr-16 md:w-72 md:mb-8 transition-all duration-300">
      <a href={search} className="absolute h-full w-full" target="_blank"></a>
      <div
        className="h-full w-fit   pr-1 flex items-center justify-center"
        style={{
          borderRight: "1px solid rgba(255,235,235,0.4)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          color="white"
          viewBox="0 0 50 50"
          width="20"
          height="20"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
        </svg>
      </div>
      <span className="h-full text-start font-semibold w-full md:mx-1 flex items-center">
        {quote}
      </span>
      <div className="w-fit pr-1 h-full flex justify-center items-center">
        <svg
          width="24"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          fill="white"
          strokeWidth="20"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>
    </div>
  );
};

export default Search;
