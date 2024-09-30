'use client';

import { navigate } from '@/actions/redirect';

export function Header() {
  return (
    <header className="flex justify-center sm:justify-start py-6 px-8">
      <button className="text-3xl font-thin" onClick={() => navigate('/')}>
        <strong className="font-semibold">Mentoras</strong> challenge
      </button>
    </header>
  );
}
