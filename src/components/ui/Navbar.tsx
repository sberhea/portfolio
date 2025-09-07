// src/components/ui/Card.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, children, hover = false, gradient = false, ...props }, ref) => {
    return (
        
        <div></div>

    )})