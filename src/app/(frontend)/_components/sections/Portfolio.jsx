"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

import { getDriveThumbnail } from "@/lib/utils";
import VideoModal from "@/app/(frontend)/_common/VideoModal";

function Portfolio({
  videos = [],
  categories = [],
  itemsPerPage = 9,
  title,
  subTitle,
}) {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Ensure videos and categories are arrays and have the expected structure
  const safeVideos = Array.isArray(videos) ? videos : [];
  const safeCategories = Array.isArray(categories) ? categories : [];

  const filteredVideos = !selectedCategory.name
    ? safeVideos
    : safeVideos.filter(
        (video) => video?.category?.name === selectedCategory?.name
      );

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

  const handleVideoClick = (video) => {};

  // If no data is available, show a fallback
  if (safeVideos.length === 0 || safeCategories.length === 0) {
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
    <div className="max-w-6xl mx-auto py-20 px-4 w-full left-0 top-0">
      <p className=" tracking-wider text-center uppercase">{title}</p>

      <h1 className="text-2xl md:text-6xl text-center mb-16 font-bold dark:text-white">
        {subTitle}
      </h1>

      <div className="flex flex-col lg:flex-row justify-between relative gap-8 lg:gap-20">
        <aside className="lg:basis-1/5 h-fit lg:sticky lg:top-20 order-2 lg:order-1">
          <ul className="space-y-2">
            <p className="text-lg mb-5 font-semibold border-b-purple-500/30 border-b-2 pb-3 shadow-lg shadow-purple-500/20">
              Categories:
            </p>
            <li
              onClick={() => handleCategoryChange({})}
              className={`pl-0 hover:pl-3 py-3 px-5 bg-gradient-to-r hover:from-purple-500/20 to-transparent duration-150 rounded-md border border-purple-500 border-opacity-0 hover:border-opacity-50 cursor-pointer transition-all ${
                !selectedCategory?.name
                  ? "from-purple-500/20 border-opacity-50 bg-purple-500/10 pl-3"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span>All Videos</span>
                <span className="text-sm text-gray-500">
                  ({safeVideos.length})
                </span>
              </div>
            </li>
            {safeCategories.map((item, index) => (
              <li
                key={index}
                onClick={() => handleCategoryChange(item)}
                className={`pl-0 hover:pl-3 py-3 px-5 bg-gradient-to-r hover:from-purple-500/20 to-transparent duration-150 rounded-md border border-purple-500 border-opacity-0 hover:border-opacity-50 cursor-pointer transition-all ${
                  !!selectedCategory.name &&
                  selectedCategory?.name === item?.name
                    ? "from-purple-500/20 border-opacity-50 bg-purple-500/10 pl-3"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item?.name || "Unnamed Category"}</span>
                  <span className="text-sm text-gray-500">
                    (
                    {
                      safeVideos.filter(
                        (video) => video?.category?.name === item?.name
                      ).length
                    }
                    )
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </aside>

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
                <>
                  <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                    {paginatedVideos.map((item, index) => (
                      <div
                        key={`${item?.link || item?.url || index}-${currentPage}-${index}`}
                        className="w-full relative h-80 group cursor-pointer"
                        onClick={() => handleVideoClick(item)}
                      >
                        <img
                          src={getDriveThumbnail(item?.link || item?.url)}
                          alt={`${item?.category?.name || "Video"} thumbnail`}
                          className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <VideoModal
                              url={item?.link || item?.url}
                              aspectRatio={
                                item?.category?.aspect_ratio || "16/9"
                              }
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          {item?.category?.name || "Unknown"}
                        </div>
                      </div>
                    ))}
                  </ul>

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
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1
                        ).map((page) => (
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
                        ))}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
