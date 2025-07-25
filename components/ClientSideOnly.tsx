// components/ClientSideOnly.tsx
"use client";

import { ReactNode, useEffect, useState } from 'react';

export default function ClientSideOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}