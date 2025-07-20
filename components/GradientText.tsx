import React, { ReactNode, CSSProperties } from "react";
import "./GradientText.css";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const defaultColors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"];

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = defaultColors,
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div
        className="text-content"
        style={{
          ...gradientStyle,
          animation: `gradient-move ${animationSpeed}s linear infinite`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientText; 