"use client";
// ScrollAnimationWrapper.js
import { useEffect } from "react";

const ScrollAnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const motionData = target.dataset.motion;
            console.log(target);
            target.setAttribute(
              "class",
              `${target.getAttribute("class")} ${motionData}`,
            );
          }
        });
      },
      {
        rootMargin: "5px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimationWrapper;
