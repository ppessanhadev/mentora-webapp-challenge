'use client';

import { navigate } from '@/actions/redirect';
import { Button } from '@/components/ui/button';
import { useCurrencyFormatter } from '@/hooks/useCurrecyFormatter';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

type ListCardProps = { id: number; title: string; price: number };

export function ListCard({ id, title, price }: ListCardProps) {
  const { transformed } = useCurrencyFormatter(price);

  function redirect(to: 'details' | 'comments') {
    if (to.includes('details')) {
      navigate(`/details/${id}`);
    } else {
    }
  }

  return (
    <Card className="p-6 flex flex-col justify-between">
      <CardTitle className="text-3xl mb-4">
        {title}
        <CardContent className="p-0 text-base font-light">{transformed}</CardContent>
      </CardTitle>

      <CardContent className="p-0 flex flex-col gap-2">
        <Button variant="outline" onClick={() => redirect('details')}>
          Ver detalhes
        </Button>

        <Button variant="outline">Ver comentários</Button>
      </CardContent>
    </Card>
  );
}
