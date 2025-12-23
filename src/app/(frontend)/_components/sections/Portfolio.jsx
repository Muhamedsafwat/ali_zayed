"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

import {
  getDriveThumbnail,
  getYouTubeEmbedSrc,
  getYouTubeThumbnail,
  urlToSrc,
} from "@/lib/utils";
import VideoModal from "@/app/(frontend)/_common/VideoModal";

function Portfolio({ categoriesData = [], itemsPerPage = 9, title, subTitle }) {
  const safeCategories = Array.isArray(categoriesData) ? categoriesData : [];

  const [selectedCategory, setSelectedCategory] = useState(safeCategories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Filter videos based on selected category
  const filteredVideos = !selectedCategory?.name ? [] : selectedCategory.videos;

  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVideos = filteredVideos.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleVideoClick = (video) => {
    console.log(video);
  };

  if (safeCategories.length === 0) {
    return (
      <div className="max-w-6xl mx-auto py-20 px-4 w-full left-0 top-0">
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Loading content...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto py-20 px-10 w-full left-0 top-0">
      <p className="tracking-wider text-center uppercase">{title}</p>

      <h1 className="text-2xl md:text-6xl text-center mb-16 font-bold dark:text-white">
        {subTitle}
      </h1>

      <div className="flex flex-col lg:flex-row justify-between relative gap-8 lg:gap-20">
        {/* Sidebar: Categories */}
        <aside className="lg:basis-1/5 h-fit lg:sticky lg:top-20 order-2 lg:order-1">
          <ul className="space-y-2">
            <p className="text-lg mb-5 font-semibold border-b-purple-500/30 border-b-2 pb-3 shadow-lg shadow-purple-500/20">
              Category:
            </p>

            {safeCategories.map((item, index) => (
              <li
                key={index}
                onClick={() => handleCategoryChange(item)}
                className={`pl-0 hover:pl-3 py-3 px-5 bg-gradient-to-r hover:from-purple-500/20 to-transparent duration-150 rounded-md border border-purple-500 border-opacity-0 hover:border-opacity-50 cursor-pointer transition-all ${
                  selectedCategory?.name === item?.name
                    ? "from-purple-500/20 border-opacity-50 bg-purple-500/10 pl-3"
                    : ""
                }`}
              >
                <span>{item?.name || "Unnamed Category"}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Videos Grid */}
        <div className="flex-1 order-1 lg:order-2">
          {isLoading ? (
            <div className="flex items-center justify-center h-[600px]">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {paginatedVideos.length} of {filteredVideos.length}{" "}
                  videos
                  {selectedCategory?.name && ` in ${selectedCategory.name}`}
                </p>
              </div>

              {paginatedVideos.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No videos found in this category.
                  </p>
                </div>
              ) : (
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                  {paginatedVideos.map((item, index) => {
                    if (!item) return null;

                    const thumbnailSrc = item?.video?.link
                      ? getDriveThumbnail(item?.video?.link)
                      : getYouTubeThumbnail(item?.video?.youtube_url);
                    const hasValidUrl =
                      (item?.video?.link &&
                        typeof item.video.link === "string") ||
                      (item?.video?.youtube_url &&
                        typeof item.video.youtube_url === "string");

                    return (
                      <div
                        key={`${item?.video?.id || index}-${currentPage}-${index}`}
                        className="w-full relative h-80 group cursor-pointer"
                        onClick={() => handleVideoClick(item)}
                      >
                        <img
                          src={thumbnailSrc || "/images/placeholder.jpg"}
                          alt={`${item?.video?.category?.name || "Video"} thumbnail`}
                          className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {hasValidUrl ? (
                              <VideoModal
                                url={
                                  item.video.link
                                    ? urlToSrc(item.video.link)
                                    : getYouTubeEmbedSrc(item.video.youtube_url)
                                }
                                aspectRatio={
                                  item?.video?.category?.aspect_ratio ||
                                  "Landscape"
                                }
                                title={item.video.title}
                                description={item.video.description}
                              />
                            ) : (
                              <div className="bg-gray-500 text-white border-2 border-neutral-300 flex justify-center px-4 py-2 rounded">
                                <span>No Video Available</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          {item?.video?.category?.name || "Unknown"}
                        </div>
                      </div>
                    );
                  })}
                </ul>
              )}

              {totalPages > 1 && (
                <div className="flex justify-center items-stretch mt-8 space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 rounded-lg border ${
                            currentPage === page
                              ? "bg-blue-500 text-white border-blue-500"
                              : "border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
