import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useCurrencyFormatter } from '@/hooks/useCurrecyFormatter';

type ListCardProps = { title: string; price: number };

export function ListCard({ title, price }: ListCardProps) {
  const { transformed } = useCurrencyFormatter(price);

  return (
    <Card className="p-6 flex flex-col justify-between">
      <CardTitle className="text-3xl mb-4">
        {title}
        <CardContent className="p-0 text-base font-light">{transformed}</CardContent>
      </CardTitle>

      <CardContent className="p-0 flex flex-col gap-2">
        <Button variant="outline">Ver detalhes</Button>
        <Button variant="outline">Comentar</Button>
      </CardContent>
    </Card>
  );
}
