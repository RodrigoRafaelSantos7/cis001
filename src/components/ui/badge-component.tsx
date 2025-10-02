/**
 * Reusable Badge Component
 * @example <Badge icon={<Icon />} text="Badge" />
 * @param {React.ReactNode} icon - The icon to display in the badge
 * @param text - The text to display in the badge
 * @returns A badge component
 */
function Badge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}): React.ReactNode {
  return (
    <div className="flex items-center justify-start gap-[8px] overflow-hidden rounded-[90px] border border-[rgba(2,6,23,0.08)] bg-white px-[14px] py-[6px] shadow-xs">
      <div className="relative flex h-[14px] w-[14px] items-center justify-center overflow-hidden">
        {icon}
      </div>
      <div className="flex flex-col justify-center text-center font-medium font-sans text-[#37322F] text-xs leading-3">
        {text}
      </div>
    </div>
  );
}

export { Badge };
