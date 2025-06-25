import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent as ShadcnCardContent } from '@/components/ui/card';
import CardContent from './CardContent';

interface PlaceholderCardProps {
  /**
   * Optional additional class names for the component.
   */
  className?: string;
}

/**
 * A complete card component that displays a skeleton UI to indicate a loading state.
 * It combines a placeholder avatar, a title line, and multiple content lines.
 */
const PlaceholderCard: React.FC<PlaceholderCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <ShadcnCardContent className="p-6">
        <div className="animate-pulse">
          <div className="flex items-start space-x-4">
            <div className="h-10 w-10 flex-shrink-0 rounded-md bg-muted" />
            <div className="mt-1 h-4 w-1/3 rounded-md bg-muted" />
          </div>
          <div className="mt-6">
            <CardContent />
          </div>
        </div>
      </ShadcnCardContent>
    </Card>
  );
};

export default PlaceholderCard;
