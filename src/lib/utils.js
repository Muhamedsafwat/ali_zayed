import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getDriveThumbnail(url, width = 400) {
  try {
    if (!url || typeof url !== "string") {
      return null;
    }

    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
    if (match && match[1]) {
      return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w${width}`;
    }
    return null;
  } catch (err) {
    console.error("Error getting thumbnail:", err.message);
    return null;
  }
}

export function urlToSrc(url) {
  try {
    if (!url || typeof url !== "string") {
      throw new Error("Invalid URL provided");
    }

    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    } else {
      throw new Error("Invalid Google Drive link format");
    }
  } catch (err) {
    console.error("Error converting URL to source:", err.message);
    return null;
  }
}
