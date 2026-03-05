import Image from "next/image";

interface Robot {
  name: string;
  description: string;
  image: string;
  isFirstBot?: boolean;
  stats?: {[key: string]: string};
}

const robots: Robot[] = [
  {
    name: "Horizon",
    description: "Horizon is a fierce horizontal spinner. Its latest iteration features a TPU chassis to absorb hits and a 101g AR500 weapon with a tip speed of 350 MPH. It's designed to pack a serious punch. It uses a direct-drive weapon motor to ensure instant torque and avoid belts.",
    image: "/images/horizon v3.webp",
    stats: {
      weight: "448g",
      weapon: "Horizontal Spinner",
      dimensions: "6.6in x 4.9in x 1.5in",
      winLoss: "9W - 4L"
    }
  },
  {
    name: "Bubbles",
    description: "Bloop bloop.",
    image: "/images/bubbles v1.webp",
    stats: {
      weight: "463g",
      weapon: "Vertical Spinner",
      dimensions: "7in x 6.5in x 4in",
      winLoss: "2W - 4L"
    }
  },
  {
    name: "Bean",
    description: "Bean.",
    image: "/images/bean v1.webp",
    stats: {
      weight: "300g",
      weapon: "Wedge",
      dimensions: "7in x 8in x 1in",
      winLoss: "4W - 4L"
    }
  },
  {
    name: "Carrot Shredder",
    description: "Carrots shredded.",
    image: "/images/carrot shredder v1.webp",
    stats: {
      weight: "410g",
      weapon: "Horizontal Spinner",
      dimensions: "7in x 6in x 2.5in",
      winLoss: "1W - 2L"
    }
  },
    {
    name: "Blover",
    description: "Blow.",
    image: "/images/blover v1.webp",
    stats: {
      weight: "410g",
      weapon: "Horizontal Spinner",
      dimensions: "7in x 6in x 2.5in",
      winLoss: "1W - 2L"
    }
  },
  {
    name: "Twofold",
    description: "Twofold is a double wedge designed to get under opponents and push them around. Its unique design includes a spare wedge ready to go, allowing it to take significantly more damage. Because it sits just 1 inch off the ground, some weapons aren't even able to hit it.",
    image: "/images/twofold v2.webp",
    isFirstBot: true,
    stats: {
      weight: "250g",
      weapon: "Dual Wedge",
      dimensions: "7in x 7.2in x 1in",
      winLoss: "5W - 7L"
    }
  },
  {
    name: "Scuttles",
    description: "Scuttles is an antweight wedge robot focused on control and reliability. Designed to withstand heavy hits and control the flow of the match.",
    image: "/images/Scuttles.webp",
    isFirstBot: true,
    stats: {
      weight: "250g",
      weapon: "Wedge",
      winLoss: "5W - 4L"
    }
  },
  {
    name: "Carrot",
    description: "Carrots.",
    image: "/images/carrot v1.webp",
    isFirstBot: true,
    stats: {
      weight: "280g",
      weapon: "Wedge",
      dimensions: "7in x 6in x 2in",
      winLoss: "2W - 1L"
    }
  },
  {
    name: "Porcupine",
    description: "Porcupine.",
    image: "/images/porcupine v1.webp",
    isFirstBot: true,
    stats: {
      weight: "230g",
      weapon: "Wedge",
      dimensions: "7in x 6in x 2in",
      winLoss: "2W - 1L"
    }
  },
];

/**
 * Robot Card Component
 * Displays an individual robot item
 */
function RobotCard({ robot }: { robot: Robot }): React.ReactNode {
  return (
    <div key={robot.name} className="premium-card overflow-hidden flex flex-col h-full rounded-2xl">
      <div className="relative h-64 w-full">
        <Image
          src={robot.image}
          alt={robot.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">{robot.name}</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {robot.description}
          </p>
        </div>
        
        {robot.stats && (
          <div className="grid grid-cols-2 gap-4 text-sm mt-auto">
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
  );
}

/**
 * Robots page component.
 * Displays a list of robots with their details and stats.
 * @returns {JSX.Element} The rendered robots page.
 */
export default function RobotsPage(): React.ReactNode {
  const currentBots = robots.filter((robot) => !robot.isFirstBot);
  const firstBots = robots.filter((robot) => robot.isFirstBot);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-black mb-12 text-center">THE <span className="text-accent">ROBOTS</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {currentBots.map((robot) => (
          <RobotCard key={robot.name} robot={robot} />
        ))}
      </div>

      {firstBots.length > 0 && (
        <>
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center mt-8">FIRST <span className="text-accent">GENERATION</span> BOTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firstBots.map((robot) => (
              <RobotCard key={robot.name} robot={robot} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
