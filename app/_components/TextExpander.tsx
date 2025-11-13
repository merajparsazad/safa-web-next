"use client";

import { useState } from "react";

function TextExpander({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 10).join(" ") + "...";

  if (children.split(" ").length < 10)
    return <p className="text-lg">{children}</p>;

  return (
    <p className="text-lg">
      {displayText}{" "}
      <button
        className="cursor-pointer border-b border-gray-600 pb-1 leading-3 text-gray-600"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "کمتر" : "بیشتر"}
      </button>
    </p>
  );
}

export default TextExpander;
