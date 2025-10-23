import React from "react";
import { FloatingDock } from "@/app/(frontend)/_common/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export function SocialMediaLinks() {
  const links = [
    {
      title: "FaceBook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/ali.zayed.274536/",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ali-zayed-65b173289/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/alizayed_19/",
    },

    {
      title: "TikTok",
      icon: (
        <IconBrandTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.tiktok.com/@ali_zayed19?_t=ZS-90SXf80S9rj&_r=1",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/201006703461",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full -translate-y-8">
      <FloatingDock items={links} />
    </div>
  );
}
