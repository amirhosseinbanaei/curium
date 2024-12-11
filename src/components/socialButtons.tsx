import { cn } from "@/utils/cn.util";
import X from "@/assets/icons/X.svg";
import Youtube from "@/assets/icons/Youtube.svg";
import Linkedin from "@/assets/icons/Linkedin.svg";
import Instagram from "@/assets/icons/Instagram.svg";
export default function SocialButtons({
  socialData,
  className,
  iconStyle,
}: {
  className?: string;
  socialData: any;
  iconStyle?: string;
}) {
  return socialData.map((eachSocialData: any) => {
    return (
      <a
        key={eachSocialData.title}
        href={eachSocialData.href}
        target="_blank"
        className={cn(
          `flex size-7 select-none list-none items-center justify-center rounded-full bg-black-primary fill-white-primary transition-all duration-700 hover:bg-primary ${className}`,
        )}
      >
        <eachSocialData.icon className={cn(`size-4 ${iconStyle}`)} />
      </a>
    );
  });
}

export function SocialLinks({
  socialData,
  className,
  iconStyle,
}: {
  className?: string;
  socialData: any;
  iconStyle?: string;
}) {
  return socialData.map((eachSocialData: any) => {
    return (
      <a
        key={eachSocialData.id}
        href={eachSocialData.href}
        className={cn(
          `after:tech:bg-landing-primary-dark after:media:bg-landing-primary-dark relative flex w-fit select-none list-none items-center gap-3 rounded-full fill-white-primary py-3 font-medium text-white-primary transition-all duration-700 after:absolute after:bottom-0 after:block after:h-[1px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 fa:text-base tech:fill-black-primary tech:text-black-primary media:fill-black-primary media:text-black-primary lg:text-sm ${className}`,
        )}
      >
        <eachSocialData.icon className={cn(`size-6 ${iconStyle}`)} />
        {eachSocialData.title}
      </a>
    );
  });
}
