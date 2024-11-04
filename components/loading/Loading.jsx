import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <svg
          className="w-32 h-32 text-blue-600 animate-spin-slow"
          role="img"
          aria-label="Shopping cart loading animation"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={8}
          >
            <g className="text-blue-200">
              <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
              <circle cx={43} cy={111} r={13} />
              <circle cx={102} cy={111} r={13} />
            </g>
            <g className="text-blue-600">
              <polyline
                points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                className="animate-dash"
                strokeDasharray="338 338"
                strokeDashoffset={-338}
              />
              <g transform="rotate(-90,43,111)" className="animate-spin-fast">
                <circle
                  cx={43}
                  cy={111}
                  r={13}
                  strokeDasharray="81.68 81.68"
                  strokeDashoffset="81.68"
                />
              </g>
              <g transform="rotate(90,102,111)" className="animate-spin-fast">
                <circle
                  cx={102}
                  cy={111}
                  r={13}
                  strokeDasharray="81.68 81.68"
                  strokeDashoffset="81.68"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
