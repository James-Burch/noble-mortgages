import React, { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and fallback sources
  const getImageSources = (originalSrc: string) => {
    const basePath = originalSrc.replace(/\.[^/.]+$/, "");
    const extension = originalSrc.split(".").pop();

    return {
      webp: `${basePath}.webp`,
      fallback: originalSrc,
    };
  };

  const { webp, fallback } = getImageSources(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            const img = imgRef.current;
            img.src = img.dataset.src || "";
            img.srcset = img.dataset.srcset || "";
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setError(true);

  if (error) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <picture>
      <source
        srcSet={priority ? webp : undefined}
        data-srcset={priority ? undefined : webp}
        type="image/webp"
        sizes={sizes}
      />
      <img
        ref={imgRef}
        src={priority ? fallback : undefined}
        data-src={priority ? undefined : fallback}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
