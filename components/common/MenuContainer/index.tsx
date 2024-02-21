import { cn } from "../../../lib/utils"

interface MenuContainerProps {
  children: React.ReactNode
  className?: string
}

const MenuContainer: React.FC<MenuContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-[4.5rem] bg-[linear-gradient(180deg,#344ABA_0%,rgba(0,20,121,0.83)_100%)] shadow-[0_6px_0_8px_#2463FF_inset,_0_-8px_0_4px_#140E66_inset]",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default MenuContainer
