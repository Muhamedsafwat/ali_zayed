"use client";
import React from "react";
import { VideoIcon } from "lucide-react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/app/(frontend)/_common/ui/Modal";

function VideoModal({ url, aspectRatio, title, description }) {
  // Handle undefined or invalid URL
  if (!url) {
    return (
      <div className="flex items-center justify-center mr-auto">
        <div className="bg-gray-500 text-white border-2 border-neutral-300 flex justify-center px-4 py-2 rounded">
          <span>No Video Available</span>
        </div>
      </div>
    );
  }

  if (!url) {
    return (
      <div className="flex items-center justify-center mr-auto">
        <div className="bg-gray-500 text-white border-2 border-neutral-300 flex justify-center px-4 py-2 rounded">
          <span>Invalid Video URL</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center mr-auto">
      <Modal>
        <ModalTrigger className="bg-black text-white border-2 border-neutral-300 flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-200">
            Play Video
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <VideoIcon />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            {title && (
              <h4 className="text-lg md:text-2xl text-neutral-100 font-bold text-center mb-3">
                {title}
              </h4>
            )}
            {description && (
              <p className="text-lg text-neutral-100 text-center mb-5">
                {description}
              </p>
            )}

            <iframe
              src={url}
              className={`h-[70vh] ${aspectRatio === "Landscape" ? "aspect-video" : "aspect-[9/16]"} rounded-lg mx-auto`}
              loading="lazy"
            ></iframe>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default VideoModal;
