import React from 'react';
import PlaceholderCard from '../components/Card/PlaceholderCard';

/**
 * The main page of the application, responsible for displaying the target component.
 * It provides a simple layout to center and showcase the PlaceholderCard.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 md:p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-4 text-center text-xl font-semibold text-foreground">
          Minimal UI Component
        </h1>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Basic structure for a card component with text layout and placeholder elements.
        </p>
        <PlaceholderCard />
      </div>
    </main>
  );
};

export default IndexPage;
