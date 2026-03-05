"use client";

import Image from "next/image";
import { useState } from "react";

/** Robot photo entry */
type RobotPhoto = {
  src: string;
  alt: string;
  label: string;
};

/** Team/event photo entry */
type TeamPhoto = {
  src: string;
  alt: string;
  label: string;
};

/** Video entry */
type VideoEntry = {
  type: "local" | "youtube";
  src: string;
  title: string;
  description: string;
};

const robotPhotos: RobotPhoto[] = [
  { src: "/images/horizon v1.jpg", alt: "Horizon V1", label: "Horizon V1" },
  { src: "/images/horizon v2.jpg", alt: "Horizon V2", label: "Horizon V2" },
  { src: "/images/horizon v3.jpg", alt: "Horizon V3", label: "Horizon V3" },
  { src: "/images/horizon v1 and bubbles.jpg", alt: "Horizon V1 and Bubbles", label: "Horizon & Bubbles" },
  { src: "/images/horizon, twofold, and bean.jpg", alt: "Horizon, Twofold, and Bean", label: "Horizon, Twofold & Bean" },
  { src: "/images/Twofold.png", alt: "Twofold", label: "Twofold" },
  { src: "/images/twofold v1.jpg", alt: "Twofold V1", label: "Twofold V1" },
  { src: "/images/twofold v2.jpg", alt: "Twofold V2", label: "Twofold V2" },
  { src: "/images/twofold v3.jpg", alt: "Twofold V3", label: "Twofold V3" },
  { src: "/images/Scuttles.png", alt: "Scuttles", label: "Scuttles" },
  { src: "/images/scuddles v1.jpg", alt: "Scuddles V1", label: "Scuddles V1" },
  { src: "/images/carrot v1.jpg", alt: "Carrot V1", label: "Carrot V1" },
  { src: "/images/carrot shredder v1.jpg", alt: "Carrot Shredder V1", label: "Carrot Shredder V1" },
  { src: "/images/bean v1.jpg", alt: "Bean V1", label: "Bean V1" },
  { src: "/images/blover v1.jpg", alt: "Blover V1", label: "Blover V1" },
  { src: "/images/bubbles v1.jpg", alt: "Bubbles V1", label: "Bubbles V1" },
  { src: "/images/porcupine v1.jpg", alt: "Porcupine V1", label: "Porcupine V1" },
  { src: "/images/cuddles v1.jpg", alt: "Cuddles V1", label: "Cuddles V1" },
  { src: "/images/robots photo 1.jpg", alt: "Robots Group Photo", label: "Robot Collection" },
];

const teamPhotos: TeamPhoto[] = [
  { src: "/images/team photo 1.jpg", alt: "Team Photo", label: "Team Photo" },
  { src: "/images/first event.jpg", alt: "First Event", label: "First Event" },
  { src: "/images/aidan comp.jpg", alt: "Aidan at competition", label: "Aidan at Competition" },
  { src: "/images/carlos comp.jpg", alt: "Carlos at competition", label: "Carlos at Competition" },
  { src: "/images/karissa comp.jpg", alt: "Karissa at competition", label: "Karissa at Competition" },
  { src: "/images/carlos and aidan comp.jpg", alt: "Carlos and Aidan at competition", label: "Carlos & Aidan" },
  { src: "/images/graeme and aidan comp.jpg", alt: "Graeme and Aidan at competition", label: "Graeme & Aidan" },
];

const videos: VideoEntry[] = [
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/j2YbS2WY6ww",
    title: "Bad Conflict in Action",
    description: "Highlight reel from our competitions.",
  },
  {
    type: "local",
    src: "/images/horizon vs bubbles.mp4",
    title: "Horizon vs Bubbles",
    description: "A team sparring session between Horizon and Bubbles.",
  },
  {
    type: "local",
    src: "/images/horizon video.mp4",
    title: "Horizon Fight",
    description: "Horizon taking on the competition.",
  },
  {
    type: "local",
    src: "/images/cuddles video.mp4",
    title: "Cuddles Fight",
    description: "Cuddles in action at an event.",
  },
];

type Tab = "robots" | "team" | "videos";

/**
 * Media page for the BadConflict website.
 * Displays robot photos, team and event photos, and videos in a tabbed layout.
 * @returns {JSX.Element} The rendered media page.
 */
export default function MediaPage(): React.ReactNode {
  const [activeTab, setActiveTab] = useState<Tab>("robots");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  /**
   * Opens the lightbox for a given image.
   * @param {string} src - Image source URL.
   * @param {string} alt - Alt text for the image.
   * @returns {void}
   */
  function openLightbox(src: string, alt: string): void {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }

  /**
   * Closes the lightbox.
   * @returns {void}
   */
  function closeLightbox(): void {
    setLightboxSrc(null);
    setLightboxAlt("");
  }

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "robots", label: "Robots", count: robotPhotos.length },
    { key: "team", label: "Team & Events", count: teamPhotos.length },
    { key: "videos", label: "Videos", count: videos.length },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#091a28] z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-black/40" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            OUR <span className="text-accent">MEDIA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Photos and videos from the arena — every battle, every build, every moment.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-12 pb-4">
        <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              id={`tab-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 border ${
                activeTab === tab.key
                  ? "bg-accent text-white border-accent shadow-lg shadow-accent/30 scale-105"
                  : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${activeTab === tab.key ? "bg-white/20" : "bg-white/10"}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Robot Photos Tab */}
      {activeTab === "robots" && (
        <section className="w-full max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold mb-8 text-gray-200">
            Robot Gallery <span className="text-accent">—</span> All Builds
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {robotPhotos.map((photo) => (
              <button
                key={photo.src}
                id={`robot-photo-${photo.label.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => openLightbox(photo.src, photo.alt)}
                className="group premium-card overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <span className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full text-center text-white text-sm font-semibold py-3 bg-gradient-to-t from-black/80 to-transparent">
                      {photo.label}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Team & Event Photos Tab */}
      {activeTab === "team" && (
        <section className="w-full max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold mb-8 text-gray-200">
            Team & Events <span className="text-accent">—</span> In the Arena
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {teamPhotos.map((photo) => (
              <button
                key={photo.src}
                id={`team-photo-${photo.label.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => openLightbox(photo.src, photo.alt)}
                className="group w-full premium-card overflow-hidden rounded-xl cursor-pointer break-inside-avoid focus:outline-none focus:ring-2 focus:ring-accent block"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <span className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full text-center text-white text-sm font-semibold py-3 bg-gradient-to-t from-black/80 to-transparent">
                      {photo.label}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Videos Tab */}
      {activeTab === "videos" && (
        <section className="w-full max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold mb-8 text-gray-200">
            Videos <span className="text-accent">—</span> Watch Us Compete
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.src} className="premium-card overflow-hidden rounded-2xl shadow-2xl shadow-accent/10">
                <div className="relative aspect-video">
                  {video.type === "youtube" ? (
                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <video
                      controls
                      className="absolute inset-0 w-full h-full object-cover bg-black"
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          id="lightbox-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={closeLightbox}
        >
          <button
            id="lightbox-close"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-accent transition-colors leading-none z-10"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt={lightboxAlt}
              width={1400}
              height={1000}
              className="object-contain max-h-[85vh] rounded-xl shadow-2xl"
              sizes="100vw"
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-medium drop-shadow-lg">
              {lightboxAlt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
