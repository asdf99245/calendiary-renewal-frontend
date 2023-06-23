'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { toggleScheme } from '@/utils/colorScheme';

export const ToggleButton = () => {
  const router = useRouter();

  const handleToggle = async () => {
    await toggleScheme();
    router.refresh();
  };

  return (
    <button className='bh rounded-sm bg-primary_gradient p-1 text-text-primary' onClick={handleToggle}>
      Toggle theme
    </button>
  );
};
