import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const sharedClasses =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2'

const variantClasses = {
  primary:
    'bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-red-600/20 dark:bg-white dark:text-slate-900 dark:hover:bg-red-500 dark:hover:text-white',
  secondary:
    'border border-slate-300 bg-white/70 text-slate-800 hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-50 hover:text-red-800 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-red-500 dark:hover:bg-red-500/10 dark:hover:text-red-300',
  inverse:
    'bg-red-600 text-white shadow-lg shadow-red-950/20 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-900/30 focus-visible:ring-red-500 focus-visible:ring-offset-slate-950',
  inverseSecondary:
    'border border-slate-700/80 bg-transparent text-slate-100 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-500/10 hover:text-red-300 focus-visible:ring-red-500 focus-visible:ring-offset-slate-950',
  icon:
    'h-10 w-10 p-0 bg-slate-900 text-white hover:-translate-y-0.5 hover:bg-red-700 dark:bg-slate-800 dark:hover:bg-red-600',
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
