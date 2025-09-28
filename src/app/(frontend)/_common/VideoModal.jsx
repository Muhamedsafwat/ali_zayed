"use client";
import React from "react";
import { VideoIcon } from "lucide-react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/app/(frontend)/_common/ui/Modal";

import { urlToSrc } from "@/lib/utils";

function VideoModal({ url, aspectRatio }) {
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
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              {/* {type.title} */}
            </h4>

            <iframe
              src={urlToSrc(url)}
              className={`h-[70vh] ${aspectRatio === "Portrait" ? "9/16" : "16/9"} rounded-lg mx-auto`}
              loading="lazy"
            ></iframe>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default VideoModal;
