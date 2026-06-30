export function FilterButton({
  label,
  isActive,
  onClick,
  baseClassName,
}: {
  label: string; // текст на кнопке навыков
  isActive: boolean; // горит кнопка активным цветом или нет 
  onClick: () => void; // ф-я при клике
  baseClassName: string; // имя класса которое подставится
}) {
  return (
    <button
      onClick={onClick}
      className={`${baseClassName} ${isActive ? `${baseClassName}--active` : ""}`}
    >
      {label}
    </button>
  );
}
