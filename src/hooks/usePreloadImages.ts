import { useEffect } from "react";

const usePreloadImages = (imagePaths: string[]) => {
  useEffect(() => {
    const preloadImages = imagePaths.map((path) => {
      const img = new Image();
      img.src = path;
      return img;
    });

    // Cleanup function
    return () => {
      preloadImages.forEach((img) => {
        img.src = "";
      });
    };
  }, [imagePaths]);
};

export default usePreloadImages;
