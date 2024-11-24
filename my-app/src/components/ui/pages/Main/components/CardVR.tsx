import { Button } from "@/components/ui/button";
import React from "react";

interface CardProps {
  imageSrc: string; // Ссылка на изображение
  title: string; // Заголовок
  description: string; // Описание
  className?: string; // Дополнительные классы
}

const CardVR: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`relative cursor-pointer p-6 border-gray-700 bg-gray-900 rounded-lg overflow-hidden transition-all border-white-gradient hover:border-gradient hover:backdrop-blur-sm !border group ${className}`}
    >
      <img src={imageSrc} alt={title} className="w-12 h-12 mb-[58px]" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>

      <Button
        size={"lg"}
        className="uppercase h-[50px] tracking-[1.5px] bg-[#25253299] backdrop-blur-xl absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm font-bold !border border-gradient rounded-none text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Show More
      </Button>
    </div>
  );
};

export default CardVR;
