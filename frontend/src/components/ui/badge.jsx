import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-brand/20 bg-brand-light text-brand',
        secondary: 'border-border bg-base text-text-body',
        accent: 'border-accent/20 bg-accent-light text-accent',
        success: 'border-success/20 bg-success-light text-success',
        warning: 'border-warning/20 bg-warning-light text-warning',
        destructive: 'border-error/20 bg-error-light text-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
