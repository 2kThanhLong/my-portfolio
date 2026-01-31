import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="h-16 px-4 bg-card border-t border-border flex items-center justify-center">
      <p className="text-sm text-foreground/60">
        &copy; {new Date().getFullYear()} Nguyen Thanh Long. All rights reserved.
      </p>
    </footer>
  );
};
