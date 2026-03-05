import Image from "next/image";
import Link from "next/link";
import FeaturedProjectsCarousel from "@/components/FeaturedProjectsCarousel";

/**
 * Sponsorship page for the BadConflict website.
 * Provides information for potential sponsors, including mission,
 * benefits, and examples of what the team builds.
 * @returns {JSX.Element} The rendered sponsorship page.
 */
export default function Sponsorship(): React.ReactNode {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            PARTNER WITH <span className="text-accent">US</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Empowering the next generation of engineers through combat robotics.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <div className="premium-card p-8 inline-block">
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl italic">
            "Bad Conflict strives to promote STEM education and innovation by providing college and high school students with the tools necessary to start their combat robotics career."
          </p>
        </div>
      </section>

      {/* About Sponsorship */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Sponsor Bad Conflict?</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              We are a self-funded <strong>501(c)(3) non-profit</strong> combat robotics team comprised of passionate STEM students and FIRST Robotics Competition Team 2451 PWNAGE alumni.
            </p>
            <p>
              <strong>Our Commitment to Accessibility:</strong> We strongly believe that combat robotics should be an inclusive sport. To increase accessibility, our team recognizes the significant costs of building and maintaining competitive robots, and we proudly cover 100% of our members&apos; robot expenses.
            </p>
            <p>
              We achieve this goal through a combination of fundraising and valuable sponsorships. Sponsorships from companies like LiveRamp, SS&amp;C, Abbvie, and Repeat Robotics play a vital role in our success. We typically seek sponsorships in the range of $500 to $2000, but we greatly appreciate any support you can offer. We also accept in-kind donations of usable parts (e.g. PCBs, motors, standard hardware).
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="premium-card overflow-hidden rounded-2xl aspect-square relative shadow-lg">
            <Image src="/images/first event.jpg" alt="First Event" fill className="object-cover" />
          </div>
          <div className="premium-card overflow-hidden rounded-2xl aspect-square relative shadow-lg">
            <Image src="/images/horizon v3.jpg" alt="Horizon Robot" fill className="object-cover" />
          </div>
          <div className="premium-card overflow-hidden rounded-2xl aspect-square relative shadow-lg">
            <Image src="/images/carlos and aidan comp.jpg" alt="Team at competition" fill className="object-cover" />
          </div>
          <div className="premium-card overflow-hidden rounded-2xl aspect-square relative shadow-lg">
            <Image src="/images/bubbles v1.jpg" alt="Bubbles Robot" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers / Benefits */}
      <section className="w-full bg-white/5 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Sponsorship Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="premium-card p-8 border border-accent/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-accent">Team Sponsorship</h3>
                <p className="text-gray-400 mb-6">Support the entire Bad Conflict organization and help us fund competition robots for our members.</p>
                <ul className="text-left space-y-4 text-gray-300">
                  <li className="flex items-start"><span className="text-accent mr-3 mt-1">✓</span> Company name or logo displayed prominently on the official team shirt</li>
                  <li className="flex items-start"><span className="text-accent mr-3 mt-1">✓</span> Mentions and links on our social media platforms and website</li>
                  <li className="flex items-start"><span className="text-accent mr-3 mt-1">✓</span> Tax-deductible donation via our 501(c)(3) status</li>
                  <li className="flex items-start"><span className="text-accent mr-3 mt-1">✓</span> Help empower the next generation of engineers</li>
                </ul>
              </div>
            </div>
            <div className="premium-card p-8 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Robot Sponsorship</h3>
                <p className="text-gray-400 mb-6">Directly sponsor a specific member&apos;s robot with monetary or in-kind donations (e.g., fabrication, parts).</p>
                <ul className="text-left space-y-4 text-gray-300">
                  <li className="flex items-start"><span className="text-accent mr-3 mt-1">✓</span> Company name or logo applied directly to the sponsored robot</li>
                  <li className="flex items-start"><span className="text-accent mr-3 mt-1">✓</span> Logo remains on the robot until it is retired</li>
                  <li className="flex items-start"><span className="text-accent mr-3 mt-1">✓</span> Perfect for in-kind donations like custom PCBs, machining services, or specialized components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Carousel */}
      <section className="w-full py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <FeaturedProjectsCarousel />
      </section>

      {/* CTA / Contact */}
      <section className="w-full text-center py-24 bg-gradient-to-t from-accent/20 to-transparent">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Become a Sponsor Today</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join us in empowering the next generation of engineers and showcasing your brand&apos;s commitment to technological advancement. 
            We offer a variety of sponsorship levels to fit any budget.
          </p>
          <a 
            href="mailto:aidankeighron@gmail.com,seankeighron@gmail.com?subject=Sponsorship%20Inquiry" 
            className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block shadow-lg shadow-accent/30 tracking-wide mb-6"
          >
            Contact Us to Partner
          </a>
          <p className="text-gray-400">
            Or email us directly at: <br className="md:hidden" />
            <a href="mailto:aidankeighron@gmail.com" className="text-white hover:text-accent font-medium">aidankeighron@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
