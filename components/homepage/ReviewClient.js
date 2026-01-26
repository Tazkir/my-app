"use client";

// import dynamic from "next/dynamic";
// import { ElfsightWidgetProps } from "react-elfsight-widget";

// export const ElfsightWidget =
//   dynamic <
//   ElfsightWidgetProps >
//   (async () => (await import("react-elfsight-widget")).ElfsightWidget,
//   {
//     ssr: false,
//   });
import { ElfsightWidget } from "next-elfsight-widget";

// import { useEffect, useState } from "react";
// import Script from "next/script";

export default function ReviewClient() {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  //   if (window.Elfsight) {
  //     window.Elfsight.init(); // Force re-initialization
  //   }
  // }, []);

  return (
    <div className="w-full px-20">
      <ElfsightWidget widgetId="861d5845-e25e-44da-9f28-efd5c2d7c94c" />
      {/* <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Elfsight) {
            window.Elfsight.init();
          }
        }}
      />
      {mounted && (
        <div className="elfsight-app-861d5845-e25e-44da-9f28-efd5c2d7c94c"></div>
      )} */}
    </div>
  );
}
