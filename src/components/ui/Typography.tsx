// src/components/ui/Typography.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Heading Components
export const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
);

export const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        'text-3xl md:text-4xl font-semibold tracking-tight text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
);

export const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-2xl md:text-3xl font-semibold tracking-tight text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
);

export const H4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        'text-xl md:text-2xl font-medium tracking-tight text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  )
);

// Body Text Components
export const Body = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-base md:text-lg text-gray-600 leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  )
);

export const BodyLarge = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-lg md:text-xl text-gray-600 leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  )
);

export const BodySmall = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm md:text-base text-gray-500 leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  )
);

// Specialty Components
export const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-xl md:text-2xl text-gray-700 leading-relaxed font-light',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
);

export const Muted = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-gray-400', className)}
      {...props}
    >
      {children}
    </p>
  )
);

export const Code = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        'px-2 py-1 text-sm bg-gray-100 text-gray-800 rounded-md font-mono',
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
);

// Display Names
H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
Body.displayName = 'Body';
BodyLarge.displayName = 'BodyLarge';
BodySmall.displayName = 'BodySmall';
Lead.displayName = 'Lead';
Muted.displayName = 'Muted';
Code.displayName = 'Code';