import Image from "next/image";

interface Robot {
  name: string;
  description: string;
  image: string;
  stats?: {
    weight: string;
    weapon?: string;
    dimensions?: string;
    winLoss?: string;
  };
}

const robots: Robot[] = [
  {
    name: "Horizon",
    description: "Horizon is a fierce horizontal spinner. Version 2 features a TPU chassis to absorb hits and a 101g AR500 weapon spinning at 18,000 RPM. With a tip speed of 350 MPH, it's designed to be a formable foe. It uses a belt-driven system to protect the motor from direct impacts.",
    image: "/images/horizon v3.jpg",
    stats: {
      weight: "450g",
      weapon: "101g AR500 spinner @ 18k RPM",
      dimensions: "6.6in x 4.9in x 1.5in",
      winLoss: "3W - 2L (V1)"
    }
  },
  {
    name: "Twofold",
    description: "Twofold is a double wedge designed to get under opponents and push them around. Its unique design includes a spare wedge ready to go, allowing it to take significantly more damage. It sits just 1 inch off the ground, causing some weapons to miss entirely.",
    image: "/images/Twofold.png",
    stats: {
      weight: "0.5lb",
      weapon: "Invertible Wedge",
      dimensions: "7in x 7.2in x 1in",
      winLoss: "5W - 7L"
    }
  },
  {
    name: "Scuttles",
    description: "Scuttles is an antweight wedge robot focused on control and reliability. Designed to withstand heavy hits and control the flow of the match.",
    image: "/images/Scuttles.png",
    stats: {
      weight: "1lb",
      weapon: "Wedge",
      winLoss: "Record 1-2"
    }
  }
];

/**
 * Robots page component.
 * Displays a list of robots with their details and stats.
 * @returns {JSX.Element} The rendered robots page.
 */
export default function RobotsPage(): React.ReactNode {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-black mb-12 text-center">THE <span className="text-accent">ROBOTS</span></h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {robots.map((robot) => (
          <div key={robot.name} className="premium-card overflow-hidden flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 relative h-64 md:h-auto bg-black/20">
              <Image
                src={robot.image}
                alt={robot.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">{robot.name}</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {robot.description}
                </p>
              </div>
              
              {robot.stats && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {Object.entries(robot.stats).map(([key, value]) => (
                    <div key={key}>
                      <span className="block text-gray-500 uppercase tracking-wider text-[10px] font-bold">{key}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
