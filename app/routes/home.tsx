import React from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Convert SVG to PNG" },
    { 
      name: "description", 
      content: "Convert SVG files to high-quality PNG images with smart resizing. Free online SVG to PNG converter with 4000px quality output." 
    },
    { name: "robots", content: "max-image-preview:large" },
    { property: "og:title", content: "Convert SVG to PNG" },
    { 
      property: "og:description", 
      content: "Convert SVG files to high-quality PNG images with smart resizing. Free online SVG to PNG converter with 4000px quality output." 
    },
    { property: "og:url", content: "/" },
    { property: "og:image", content: "/banner.jpg" },
    { property: "og:type", content: "website" },
  ];
}

const home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8 lg:mr-[300px]">
        <div className="border border-border bg-card dark:bg-card rounded-xl p-6">
          Testing
        </div>
      </div>
    </div>
  );
};

export default home;
