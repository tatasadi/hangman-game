import Image from "next/image"
import iconHeart from "../../../public/icon-heart.svg"
import { cn } from "../../../lib/utils"

const Lives: React.FC<{ lives: number; className?: string }> = ({
  lives,
  className = "",
}) => {
  return (
    <div className={cn("flex items-center gap-4 sm:gap-10", className)}>
      <div className="flex w-[3.5625rem] items-start rounded-full bg-white p-1 sm:w-40 sm:p-2 lg:w-60">
        <div
          className="h-2 rounded-full bg-dark-navy sm:h-[0.8125rem]"
          style={{ width: `${(lives / 8) * 100}%` }}
        ></div>
      </div>
      <Image src={iconHeart} alt="heart" className="h-6 sm:h-12" />
    </div>
  )
}

export default Lives
