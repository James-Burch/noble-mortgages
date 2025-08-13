export const measurePerformance = () => {
  if (typeof window === "undefined") return;

  // Core Web Vitals measurement
  const measureWebVitals = () => {
    // First Contentful Paint
    const paintEntries = performance.getEntriesByType("paint");
    const fcp = paintEntries.find(
      (entry) => entry.name === "first-contentful-paint"
    );

    // Largest Contentful Paint
    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log("CLS:", clsValue);
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const perfEntry = entry as any; // Type assertion for PerformanceEventTiming
          const fid = perfEntry.processingStart - perfEntry.startTime;
          console.log("FID:", fid);
        }
      });
      fidObserver.observe({ entryTypes: ["first-input"] });
    }

    if (fcp) {
      console.log("FCP:", fcp.startTime);
    }
  };

  // Wait for page load
  if (document.readyState === "complete") {
    measureWebVitals();
  } else {
    window.addEventListener("load", measureWebVitals);
  }
};

// Resource hints utility
export const addResourceHints = () => {
  const head = document.head;

  // Preconnect to external domains
  const preconnects = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://wa.me",
  ];

  preconnects.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = url;
    link.crossOrigin = "";
    head.appendChild(link);
  });

  // DNS prefetch for external resources
  const dnsPrefetch = ["https://noblemortgages.co.uk"];

  dnsPrefetch.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = url;
    head.appendChild(link);
  });
};
