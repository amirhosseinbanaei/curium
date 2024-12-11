import AngleRight from "@/assets/icons/AngleRight.svg";
import { cn } from "@/utils/cn.util";

interface SliderButtonsProps {
  handlers: [() => void, () => void];
  color: "white" | "black";
  isBeginning: boolean;
  isEnd: boolean;
  className?: string;
}
export default function SliderButtons({
  color,
  handlers,
  isBeginning,
  isEnd,
  className
}: SliderButtonsProps) {
  const [prevSliderHandler, nextSliderHandler] = handlers;
  return (
    <div
      className={cn(
        `z-10 mx-auto flex h-12 w-11/12 items-center justify-end gap-3 md:absolute md:right-0 md:w-auto fa:md:left-0 ${className}`,
      )}
    >
      <Button
        color={color}
        type="prev"
        handler={prevSliderHandler}
        disabled={isBeginning}
      />
      <Button
        color={color}
        type="next"
        handler={nextSliderHandler}
        disabled={isEnd}
      />
    </div>
  );
}

function Button({
  type,
  color,
  handler,
  disabled,
}: {
  handler: any;
  disabled: boolean;
  type: "prev" | "next";
  color: "white" | "black";
}) {
  const buttonStyle: {
    [key: string]: { active: string; disabled: string };
  } = {
    white: {
      active: "bg-white-primary fill-black-primary",
      disabled: "bg-white-secondary fill-black-primary",
    },
    black: {
      active: "bg-black-primary fill-white-primary",
      disabled: "bg-white-secondary fill-black-primary",
    },
  };
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full ${
        disabled ? buttonStyle[color].disabled : buttonStyle[color].active
      } `}
      onClick={handler}
    >
      <AngleRight
        className={cn(`size-7`, {
          "rotate-180 fa:rotate-0": type === "prev",
          "rotate-0 fa:rotate-180": type === "next",
        })}
      />
    </button>
  );
}
