import { cn } from "../../../lib/utils"
import Heading from "../Typography/Heading"
import Paragraph from "../Typography/Paragraph"

interface HowToPlayCardProps {
  number: string
  title: string
  description: string
  className?: string
}

const HowToPlayCard: React.FC<HowToPlayCardProps> = ({
  number,
  title,
  description,
  className = "",
}) => {
  return (
    <article
      className={cn(
        "grid grid-cols-[auto_1fr] gap-4 rounded-[2.5rem] bg-white px-8 py-8 sm:place-items-center sm:gap-x-10 sm:px-10 lg:grid-cols-1 lg:gap-y-10 lg:px-12 lg:py-[3.75rem]",
        className,
      )}
    >
      <Heading
        level={3}
        size="m"
        className="text-blue sm:row-span-2 sm:text-[5.5rem] lg:row-span-1"
      >
        {number}
      </Heading>
      <Heading
        level={2}
        size="m"
        className="font-medium text-dark-navy sm:place-self-start lg:place-self-center"
      >
        {title}
      </Heading>
      <Paragraph className="text-light-purple col-span-2 sm:col-span-1 lg:text-center">
        {description}
      </Paragraph>
    </article>
  )
}

export default HowToPlayCard
