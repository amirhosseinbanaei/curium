"use client";
import Lottie from "react-lottie-player";
export default function LottieAnimation(props:any) {
  return <Lottie animationData={props.animation} loop={true} {...props} />;
}
