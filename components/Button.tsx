import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const sharedClasses =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black'

const variantClasses = {
  primary:
    'bg-red-600 text-white shadow-lg shadow-red-600/20 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-500/30',
  secondary:
    'border border-white/10 bg-white/[0.03] text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-400',
  inverse:
    'bg-white text-black shadow-lg shadow-white/10 hover:-translate-y-0.5 hover:bg-red-50',
  inverseSecondary:
    'border border-white/10 bg-white/[0.03] backdrop-blur-md text-white hover:-translate-y-0.5 hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-400',
  icon:
    'h-10 w-10 p-0 bg-white/[0.05] border border-white/[0.08] text-white hover:-translate-y-0.5 hover:bg-red-600 hover:border-red-600',
}

type CommonProps = {
  children: ReactNode
  className?: string
  variant?: keyof typeof variantClasses
}

type ButtonAsLinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type ButtonAsButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps

export default function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  const classes = cn(sharedClasses, variantClasses[variant], className)

  if ('href' in props && props.href) {
    return <a className={classes} {...props}>{children}</a>
  }

  const { type, ...buttonProps } = props as ButtonAsButtonProps
  return <button {...buttonProps} type={type ?? 'button'} className={classes}>{children}</button>
}
