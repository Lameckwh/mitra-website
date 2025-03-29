'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ProgressProvider
        height="3px"
        color="#07B0F1"
        options={{
          showSpinner: false,
          trickleSpeed: 200,
          minimum: 0.1,
          easing: 'ease',
          speed: 500,
        }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default Providers;