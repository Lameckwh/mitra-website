// src/components/ui/ServicesCards.tsx
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Network,
  Server,
  ShieldCheck,
  BarChart2,
  Code2,
} from "lucide-react";

// Map titles to Lucide icons with original colors
const iconMap: Record<string, React.ReactNode> = {
  "Network Solutions": <Network className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />,
  "Data Center Services": <Server className="w-10 h-10 md:w-12 md:h-12 text-green-500" />,
  "Cyber Security Solutions": <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-red-500" />,
  "Business Intelligence and Analytics": <BarChart2 className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />,
  "Software Development and Database Services": <Code2 className="w-10 h-10 md:w-12 md:h-12 text-purple-500" />,
};

export const ServicesCards = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("p-2 bg-white dark:bg-gray-900 text-black dark:text-white")}>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1 md:py-1", className)}>
        {items.map((item, idx) => (
          <Link
            href={ item.link} // Prepend /services/ to match routing
            key={item.link}
            className="relative group p-2 block h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-gray-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex justify-center">{iconMap[item.title]}</div>
              <CardTitle className="text-center">{item.title}</CardTitle>
              <CardDescription className="text-center">{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Reusable Card Components with original ServicesCards colors
export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-3 md:p-4 overflow-hidden border border-transparent",
        "bg-gray-100 dark:bg-gray-800 text-black dark:text-white",
        "group-hover:border-gray-300 dark:group-hover:border-gray-600",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-3 md:p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h4 className={cn("text-base md:text-lg font-bold tracking-wide md:mt-4 text-gray-900 dark:text-white", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <p className={cn("mt-4 md:mt-8 tracking-wide leading-relaxed text-gray-700 dark:text-gray-300 text-xs md:text-sm", className)}>
      {children}
    </p>
  );
};