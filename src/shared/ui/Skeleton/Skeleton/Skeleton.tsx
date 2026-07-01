import "./Skeleton.css";

export function Skeleton({
  width = "100%", 
  height = "20px",
  className = "",
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <div
      className={`skeleton-pulse ${className}`}
      style={{ width, height }}
    />
  );
}
