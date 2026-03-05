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
      weaponWeight: "101g AR500 Steel",
      tipSpeed: "350 MPH",
      chassis: "TPU"
    }
  },
  {
    name: "Bubbles",
    description: "Bubbles is a vertical spinner with a deceptively bubbly name and a not-so-bubbly weapon. Its wide stance gives it excellent stability, letting the bar spin up fast and stay that way. Bubbles hits hard and takes hits even harder thanks to its reinforced TPU frame.",
    image: "/images/bubbles v1.webp",
    stats: {
      weight: "463g",
      weapon: "Vertical Spinner",
      dimensions: "7in x 6.5in x 4in",
      weaponDrive: "Belt Drive",
    }
  },
  {
    name: "Bean",
    description: "Bean is a low-profile wedge built for control and aggression. Its wide, flat geometry lets it scoop under nearly any opponent, and its solid TPU construction shrugs off punishment that would destroy less beefy bots. It may look simple, but Bean has a mean streak.",
    image: "/images/bean v1.webp",
    stats: {
      weight: "300g",
      weapon: "Wedge",
      dimensions: "7in x 8in x 1in",
      chassis: "TPU"
    }
  },
  {
    name: "Carrot Shredder",
    description: "Carrot Shredder is a lightweight horizontal spinner with a no-nonsense approach to combat: spin fast, hit hard, and let the pieces fall where they may. Its low-slung weapon disc reaches opponents before they even know what's coming, making it a constant threat from the opening buzzer.",
    image: "/images/carrot shredder v1.webp",
    stats: {
      weight: "410g",
      weapon: "Horizontal Spinner",
      dimensions: "7in x 6in x 2.5in",
      weaponDrive: "Belt Drive"
    }
  },
    {
    name: "Blover",
    description: "Blover is a compact horizontal spinner that prioritizes reliability over flash. Its sturdy chassis keeps all the important bits intact through grueling matches, and its spinning disc builds up enough energy to send opponents into the walls. Don't let the name fool you it definitely bites.",
    image: "/images/blover v1.webp",
    stats: {
      weight: "398g",
      weapon: "Horizontal Spinner",
      dimensions: "6.8in x 5.8in x 2.3in",
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
      wedges: "2",
      groundClearance: "~0.25in"
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
    }
  },
  {
    name: "Carrot",
    description: "Carrot is a force to be reckoned with. Built to push and control, its angled wedge face gets under opponents with surprising ease, and it has the battle scars to prove it.",
    image: "/images/carrot v1.webp",
    isFirstBot: true,
    stats: {
      weight: "280g",
      weapon: "Wedge",
      dimensions: "7in x 6in x 2in",
    }
  },
  {
    name: "Porcupine",
    description: "Porcupine is a wedge with a spiky attitude. Despite being a light bot, it punches well above its weight with a low wedge angle that slides under opponents before they can react. Compact, quick, and surprisingly resilient.",
    image: "/images/porcupine v1.webp",
    isFirstBot: true,
    stats: {
      weight: "230g",
      weapon: "Wedge",
      dimensions: "6.5in x 5.5in x 1.8in",
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
