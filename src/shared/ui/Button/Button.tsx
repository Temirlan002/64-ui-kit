import type { ComponentProps, ReactNode } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const VARIANTS: Record<ButtonVariant, string> = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
    secondary: 'border border-border bg-surface text-foreground hover:bg-slate-50',
    danger: 'bg-danger-500 text-white hover:bg-danger-600',
    ghost: 'text-foreground hover:bg-slate-100'
}

const SIZES: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg'
}

export interface ButtonProps extends ComponentProps<'button'> {
    variant?: ButtonVariant
    size?: ButtonSize
    isLoading?: boolean
    leftIcon?: ReactNode
    fullWidth?: boolean
}

export function Button({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    fullWidth = false,
    disabled,
    type = 'button',
    className,
    children,
    ...props
}: ButtonProps) {

    return (
        <button
            type={type}
            disabled={disabled || isLoading} 
            aria-busy={isLoading}
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-control font-medium transition',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
                'disabled:cursor-not-allowed disabled:opacity-50',
                VARIANTS[variant],
                SIZES[size],
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {isLoading ? <Spinner /> : leftIcon}
            {children}
        </button>
    )
}

function Spinner() {
    return (
        <span 
            aria-hidden='true'
            className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
    )
}