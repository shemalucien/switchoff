"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  url: string;
  alt: string;
  type?: string;
  category?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  columns?: number;
  showLightbox?: boolean;
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title = "Gallery",
  columns = 3,
  showLightbox = true,
  className = "",
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const isPlaceholder = (url: string) => url.includes("REPLACE_WITH_YOUR");

  return (
    <>
      {/* Gallery Grid */}
      <div className={className}>
        {title && (
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            {title}
          </h3>
        )}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-64 rounded-lg overflow-hidden cursor-pointer group ${
                showLightbox ? "hover:shadow-xl" : ""
              } transition-all duration-300`}
              onClick={() => showLightbox && setSelectedIndex(index)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800">
                {!isPlaceholder(image.url) ? (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800">
                    <div className="text-center text-gray-700 dark:text-gray-300">
                      <p className="font-semibold">Image Placeholder</p>
                      <p className="text-xs mt-2">Replace with your image</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Overlay on Hover */}
              {showLightbox && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{image.alt}</p>
                {image.type && (
                  <p className="text-gray-300 text-xs">{image.type}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {showLightbox && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 mt-20 flex items-center justify-center bg-black/95 p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white transition-colors hover:text-gray-300"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <div className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-lg bg-black md:h-[600px]">
              {!isPlaceholder(images[selectedIndex].url) ? (
                <Image
                  src={images[selectedIndex].url}
                  alt={images[selectedIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center text-gray-400">
                    <p className="text-lg font-semibold">Image Placeholder</p>
                    <p className="mt-2 text-sm">Replace with your image URL</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center text-white">
              <p className="text-lg font-semibold">
                {images[selectedIndex].alt}
              </p>
              <p className="text-sm text-gray-400">
                {selectedIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
