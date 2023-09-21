import { cn } from "@/libs/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onCLick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onCLick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onCLick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
