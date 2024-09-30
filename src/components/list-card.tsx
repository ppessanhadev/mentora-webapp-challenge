'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useCurrencyFormatter } from '@/hooks/useCurrecyFormatter';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

type ListCardProps = { id: number; title: string; price: number };

export function ListCard({ id, title, price }: ListCardProps) {
  const { transformed } = useCurrencyFormatter(price);

  return (
    <Card className="p-6 flex flex-col justify-between">
      <CardTitle className="text-3xl mb-4">
        {title}
        <CardContent className="p-0 text-base font-light">{transformed}</CardContent>
      </CardTitle>

      <CardContent className="p-0 flex flex-col gap-2">
        <Link href={`/details/${id}`} scroll={true}>
          <Button variant="outline" className="w-full">
            Ver detalhes
          </Button>
        </Link>

        <Link href={`/details/${id}#comments-section`} scroll={true}>
          <Button variant="outline" className="w-full">
            Ver comentários
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
