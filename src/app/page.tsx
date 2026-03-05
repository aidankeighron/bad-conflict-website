import Image from "next/image";
import Link from "next/link";

/**
 * Home page for the BadConflict website.
 * Provides a brief summary of the team and links to other sections.
 * @returns {JSX.Element} The rendered home page.
 */
export default function Home(): React.ReactNode {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />
        <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-110 blur-sm">
           <Image
            src="/images/logo.png"
            alt="Bad Conflict Background"
            width={800}
            height={800}
            className="object-contain"
            style={{ width: "auto" }}
            priority
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            BAD <span className="text-accent">CONFLICT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Innovation. Durability. Destruction.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Link href="/robots" className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Meet the Robots
            </Link>
            <Link href="/members" className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
        <div className="space-y-6 text-lg text-gray-400 leading-relaxed text-left md:text-center">
          <p>
            Bad Conflict is a combat robotics team dedicated to pushing the limits of whats possible in the 1lb weight class. 
            Founded with a philosophy of removing barriers to entry, we support our members through every stage of the creation process: providing 
            funding, technical support, and collaborative environment.
          </p>
          <p>
            With such a constraining weight limit, we constantly innovate to make our robots more durable, efficient, and destructive. 
            Through corporate sponsorships and teamwork, we ensure that anyone with a passion for engineering 
            can compete at the highest level of combat robotics.
          </p>
        </div>
      </section>

      {/* Media Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Watch Us In Action</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="premium-card overflow-hidden rounded-2xl aspect-video relative shadow-2xl shadow-accent/20">
            <iframe 
              src="https://www.youtube.com/embed/j2YbS2WY6ww" 
              title="Bad Conflict in Action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <div className="premium-card overflow-hidden rounded-2xl aspect-video relative shadow-2xl shadow-accent/20">
            <video 
              controls 
              className="absolute inset-0 w-full h-full object-cover bg-black"
              preload="metadata"
            >
              <source src="/images/horizon video.webm" type="video/webm" />
              <source src="/images/horizon video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="premium-card overflow-hidden rounded-2xl aspect-video relative shadow-2xl shadow-accent/20">
            <video 
              controls 
              className="absolute inset-0 w-full h-full object-cover bg-black"
              preload="metadata"
            >
              <source src="/images/horizon vs bubbles.webm" type="video/webm" />
              <source src="/images/horizon vs bubbles.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="premium-card overflow-hidden rounded-2xl aspect-video relative shadow-2xl shadow-accent/20">
            <video 
              controls 
              className="absolute inset-0 w-full h-full object-cover bg-black"
              preload="metadata"
              muted={true}
            >
              <source src="/images/cuddles video.webm" type="video/webm" />
              <source src="/images/cuddles video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-24">
        <div className="premium-card p-8">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-accent font-bold">#1</div>
          <h3 className="text-xl font-bold mb-4">Innovation</h3>
          <p className="text-gray-400 font-medium">Constantly iterating on designs like Horizon and Bubbles to stay ahead of the competition.</p>
        </div>
        <div className="premium-card p-8">
           <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-accent font-bold">#2</div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p className="text-gray-400 font-medium">Providing mentorship in CAD, wiring, and building to remove all barriers to entry.</p>
        </div>
        <div className="premium-card p-8">
           <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-accent font-bold">#3</div>
          <h3 className="text-xl font-bold mb-4">Destruction</h3>
          <p className="text-gray-400 font-medium">Designing high-tip-speed weapons and robust armor to dominate the arena.</p>
        </div>
      </section>
    </div>
  );
}
