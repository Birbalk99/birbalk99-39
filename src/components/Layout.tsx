// src/components/Layout.tsx
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { ShootingStars } from "@/components/ui/shooting-stars";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Vortex
         backgroundColor="black"
        rangeY={800}
        particleCount={150}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
          <ShootingStars
            minSpeed={4}
            maxSpeed={20}
            minDelay={1200}
            maxDelay={4200}
            starColor="#9E00FF"
            trailColor="#2EB9DF"
            starWidth={25}
            starHeight={2}
            />
        </Vortex>
      </div>
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
