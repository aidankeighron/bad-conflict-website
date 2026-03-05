import Image from "next/image";

interface Member {
  name: string;
  role: string;
  description: string;
  image: string;
  github?: string;
  linkedin?: string;
  robots?: string[];
}

const members: Member[] = [
  {
    name: "Aidan Keighron",
    role: "Team Principle",
    description: "Co-Founder and Team Principle of Bad Conflict. Software Developer and combat robotics enthusiast focused on making competitive robotics accessible to everyone.",
    image: "https://avatars.githubusercontent.com/u/78337317?v=4",
    github: "https://github.com/aidankeighron",
    linkedin: "https://www.linkedin.com/in/aidan-keighron/",
    robots: ["Horizon", "Twofold"]
  },
  {
    name: "Graeme McDaniel",
    role: "CAD Lead",
    description: "Co-Founder and Lead Computer-Aided Design (CAD) specialist for Bad Conflict. Responsible for the structural integrity and mechanical design of our most advanced robots.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGDyaUV5toOxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687843644124?e=1774483200&v=beta&t=i1Qqd8OHpn8yP4QHJxvmHADotGwztqUidf187VEFfBo",
    linkedin: "https://www.linkedin.com/in/graeme-mcdaniel-054382202/",
    robots: ["Scuttles", "Bubbles"]
  },
  {
    name: "Alanna Ping",
    role: "Media Manager",
    description: "Media manager and integral team member contributing to robot assembly and competition strategy. Passionate about engineering and robot combat.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFkhgasVBqtHw/profile-displayphoto-shrink_400_400/B56Zbvb8HHGsAg-/0/1747773803159?e=1774483200&v=beta&t=CJiOaLKuna7j8nKX4mqdqopO93IXvy7EZjMlco9UnD4",
    linkedin: "https://www.linkedin.com/in/alanna-ping-189b55277/",
    robots: ["Blover", "Porcupine"]
  },
  {
    name: "Karissa Garnache",
    role: "Core Values Lead",
    description: "Core Values Lead of Bad Conflict, supporting the team in various engineering and operational capacities.",
    image: "/images/logoWithText.webp", // Placeholder
    robots: ["Carrot", "Carrot Shredder"]
  },
  {
    name: "Carlos Avalos",
    role: "Team Member",
    description: "Member of the Bad Conflict team, focusing on the development and refinement of antweight combat robots.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHk_LA48xCjcQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719234824745?e=1774483200&v=beta&t=h_bcLUNVJsODjXTHsMjLGl1rKT7ZUd37Xu28XFTPHBU",
    linkedin: "https://www.linkedin.com/in/luis-carlos-avalos-medina-/",
    robots: ["Bean"]
  }
];

/**
 * Members page component.
 * Displays a grid of team members with their roles and bios, along with the robots they run.
 * @returns {JSX.Element} The rendered members page.
 */
export default function MembersPage(): React.ReactNode {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-black mb-4 text-center">MEET THE <span className="text-accent">TEAM</span></h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 px-4">
        Our team is a diverse group of engineers dedicated to lowering the barrier to entry in combat robotics.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.name} className="premium-card p-8 flex flex-col items-center text-center">
            <div className="w-32 h-32 relative rounded-full overflow-hidden mb-6 border-2 border-accent/20 p-1">
              <div className="w-full h-full relative rounded-full overflow-hidden bg-black/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
            <span className="text-accent font-bold text-sm tracking-widest uppercase mb-4">{member.role}</span>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
              {member.description}
            </p>
            
            {member.robots && member.robots.length > 0 && (
              <div className="w-full mb-6">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Robots</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.robots.map(robot => (
                    <span key={robot} className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-medium text-xs rounded-full">
                      {robot}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-4 mt-auto">
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

