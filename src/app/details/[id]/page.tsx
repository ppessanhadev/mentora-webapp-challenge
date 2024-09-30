import { env } from '@/config/env';
import { Card } from '@/components/ui/card';
import { MentoringDetails } from '@/types/Mentoring';
import { CommentForm } from '@/components/comment-form';
import { useCurrencyFormatter } from '@/hooks/useCurrecyFormatter';

type DetailsProps = { params: { id: string } };

export default async function Details({ params }: DetailsProps) {
  const { formatter } = useCurrencyFormatter();

  const response = await fetch(`${env.apiUrl}/mentoring/${params.id}`);
  const mentoring = (await response.json()) as MentoringDetails;

  return (
    <main className="p-8 flex flex-col md:flex-row gap-8">
      <article className="flex flex-col gap-4 basis-3/5">
        <h1 className="text-3xl font-semibold text-center md:text-left">{mentoring.title}</h1>
        <h4 className="text-center md:text-left">{mentoring.description}</h4>
        <p className="text-xl text-center md:text-left font-light">{formatter(mentoring.price)}</p>
      </article>

      <aside className="w-full basis-2/5" id="comment-form">
        <Card className="flex flex-col gap-2 justify-center items-center p-6">
          <CommentForm />
        </Card>
      </aside>
    </main>
  );
}
