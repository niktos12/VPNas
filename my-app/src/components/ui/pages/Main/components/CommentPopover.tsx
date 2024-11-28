import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CommentPopoverProps {
  imageUrl: string;
  description: string;
  employeeName: string;
  employeePosition: string;
  classname?: string;
}

const CommentPopover: React.FC<CommentPopoverProps> = ({
  imageUrl,
  description,
  employeeName,
  employeePosition,
  classname,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img
          src={imageUrl}
          className={`absolute ${classname} transition-all duration-300 p-2 bg-gradient-to-r from-slate-50 to-slate-600 hover:bg-gradient-to-r hover:from-[#0CBAF1] hover:to-[#E95CE9] z-30 cursor-pointer rounded-full `}
        />
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-[#252532C4]" side="right">
        <div className="px-4 py-3 rounded-lg flex flex-col gap-3">
          <p className="text-sm text-[#D1D1D1]">{description}</p>
          <div className="mt-2 flex flex-row">
            <p className="text-xs">{employeeName} -&nbsp;</p>
            <p className="text-[#D1D1D1] text-xs">
              {employeePosition}
            </p>
          </div>
          <div className="h-px !border border-gradient -mt-2"></div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CommentPopover;
