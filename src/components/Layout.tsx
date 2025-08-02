// src/components/Layout.tsx
import React from "react";
import heroImage from "@/assets/hero-bg.gif";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Persistent background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      {/* Main content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
