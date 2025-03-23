 

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
} from "lucide-react"; // Import Lucide icons

//  Map titles to Lucide icons
import { JSX } from "react"; // Import JSX.Element

const iconMap: Record<string, JSX.Element> = {
  "Network Solutions": <Network className="w-12 h-12 text-blue-500" />,
  "Data Center Services": <Server className="w-12 h-12 text-green-500" />,
  "Cyber Security Solutions": <ShieldCheck className="w-12 h-12 text-red-500" />,
  "Business Intelligence and Analytics": <BarChart2 className="w-12 h-12 text-yellow-500" />,
  "Software Development and Database Services": <Code2 className="w-12 h-12 text-purple-500" />,
};

 

export const ServicesHome = ({
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
    <div className="p-2">
      <h1 className="text-3xl font-bold text-center">Our Services</h1>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
        {items.map((item, idx) => (
          <Link
            href={item.link}
            key={item.link}
            className="relative group p-2 block h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card>
              {/* ✅ Use Lucide icon from the map */}
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

// Reusable Card Components
export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};
