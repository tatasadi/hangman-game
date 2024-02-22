import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../../lib/utils"

const buttonVariants = cva(
  "uppercase inline-flex items-center justify-center whitespace-nowrap rounded-md text-[2rem] leading-[2.4rem] tracking-[0.1rem] font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        primary:
          "bg-blue text-white hover:bg-light-blue py-3 px-12 rounded-full shadow-[0_1px_0_6px_#3c74ff_inset]",
        secondary:
          "bg-gradient-to-b from-pink to-light-blue hover:from-light-pink hover:to-lighter-blue text-white hover:bg-lighter-blue py-3 px-12 rounded-full shadow-[0_1px_0_6px_#C642FB_inset]",
        "playable-letter":
          "bg-blue cursor-default text-white text-[5.5rem] leading-[6.6rem] py-3 px-12 rounded-[2.5rem] w-[7rem] h-[8rem] shadow-[0_1px_0_6px_#3c74ff_inset,0_-2px_0_3px_#140e66_inset] disabled:bg-blue/75 disabled:shadow-[0_1px_0_6px_#221d74_inset]",
        "keyboard-letter":
          "bg-white text-dark-navy text-[3rem] leading-[3.6rem] hover:bg-blue hover:text-white rounded-[1.5rem]  h-[5.25rem] disabled:bg-white/25",
        category:
          "bg-blue text-white hover:bg-light-blue py-3 px-12 rounded-[2.5rem] text-[3rem] tracking-[0.15rem] leading-[3.6rem] h-[11.875rem] shadow-[0_1px_0_6px_#3c74ff_inset]",
        play: "bg-gradient-to-b from-pink to-light-blue hover:from-light-pink hover:to-lighter-blue text-white hover:bg-lighter-blue w-[12.5rem] h-[12.5rem] rounded-full shadow-[0_-7px_0_6px_#243041_inset,_0_-14px_0_11px_#C642FB_inset]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
