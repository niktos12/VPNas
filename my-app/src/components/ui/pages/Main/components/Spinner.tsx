import React, { CSSProperties } from "react";

const Spinner = () => {
  const getCircleStyle = (
    index: number,
    size: number,
    count: number
  ): CSSProperties => {
    const sizeStep = size / 2 / count;
    const calculatedSize = size - sizeStep * index;

    return {
      width: `${calculatedSize}px`,
      height: `${calculatedSize}px`,
    };
  };

  const getAngleStyle = (index: number, count: number): CSSProperties => {
    const angle = (index * 360) / count;

    return {
      transform: `rotate(${angle}deg)`,
      transformOrigin: "bottom",
    };
  };

  const circles = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="spinner-rail flex justify-center items-start absolute w-5 h-10"
      style={getAngleStyle(index, 8)}
    >
      <div
        key={index}
        style={{
          ...getCircleStyle(index, 19, 8),
            background: `linear-gradient(to right, #0cbaf1, #e95ce9)`,
            // background:'#ffffff',
          animation: "pulse 1.5s infinite ${index * 0.1}s ease-in-out",
        }}
        className="circle w-4 h-4 rounded-full "
      ></div>
    </div>
  ));

  return (
    <div className="spiner relative w-20 h-20">
      <div className="relative translate-x-8">{circles}</div>
    </div>
  );
};

export default Spinner;
