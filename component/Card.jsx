import React from "react";

function Card({ img, snippet, storyid, source, date, title, slink }) {
  return (
    <div className="p-2 sm:p-4 bg-blue-950 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-4 py-3 sm:px-6 sm:py-5 overflow-y-auto max-h-[90vh]">
          <h1 className="font-extrabold text-2xl sm:text-3xl mb-3 text-center">{title}</h1>
          {img && (
            <img
              src={img}
              alt={title || "Story image"}
              className="w-full h-40 sm:h-52 object-cover rounded-md mb-3"
            />
          )}
          <p className="text-gray-700 mb-1 text-sm sm:text-base">
            <span className="font-bold">Date:</span> {date}
          </p>
          <p className="text-gray-700 mb-1 text-sm sm:text-base">
            <span className="font-bold">Details:</span> {snippet}
          </p>
          <p className="text-gray-700 mb-1 text-sm sm:text-base">
            <span className="font-bold">Source:</span> {source}
          </p>
          {slink && (
            <a
              href={slink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline font-semibold text-sm sm:text-base"
            >
              View More
            </a>
          )}
        </div>
        <div className="text-xs text-center text-gray-400 py-2 bg-gray-100">{storyid}</div>
      </div>
    </div>
  );
}

export default Card;
