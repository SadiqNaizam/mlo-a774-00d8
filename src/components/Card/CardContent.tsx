import React from 'react';
import { cn } from '@/lib/utils';

interface CardContentProps {
  /**
   * Optional additional class names for the component.
   */
  className?: string;
}

/**
 * Renders a set of placeholder text lines to be used inside a skeleton loader.
 * This component is intended for composition within other components like PlaceholderCard.
 */
const CardContent: React.FC<CardContentProps> = ({ className }) => {
  return (
    <div className={cn('space-y-3', className)}>
      <div className="h-4 w-full rounded-md bg-muted" />
      <div className="h-4 w-5/6 rounded-md bg-muted" />
      <div className="h-4 w-2/3 rounded-md bg-muted" />
    </div>
  );
};

export default CardContent;
