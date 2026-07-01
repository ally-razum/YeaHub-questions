interface QueryBoundaryProps {
  isLoading: boolean;
  isError: boolean;
  loadingText?: string; 
  children: React.ReactNode; // отрендерится если всё ок
}

export function QueryBoundary({
  isLoading,
  isError,
  loadingText = "Загрузка...",
  children,
}: QueryBoundaryProps) {
  if (isLoading) {
    return (
      <div style={{ color: "#718096", padding: "12px 0" }}>{loadingText}</div>
    );
  }
 if (isError) {
    return null;
  }
  return <>{children}</>;
}
