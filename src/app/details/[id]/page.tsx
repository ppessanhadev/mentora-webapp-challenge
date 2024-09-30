import { env } from '@/config/env';
import { Card } from '@/components/ui/card';
import { Feedback } from '@/types/Feedback';
import { Comments } from '@/components/comments';
import { MentoringDetails } from '@/types/Mentoring';
import { CommentForm } from '@/components/comment-form';
import { useCurrencyFormatter } from '@/hooks/useCurrecyFormatter';

type DetailsProps = { params: { id: string } };

export default async function Details({ params }: DetailsProps) {
  const { formatter } = useCurrencyFormatter();

  const [mentoringPayload, commentsPayload] = await Promise.all([
    fetch(`${env.apiUrl}/mentoring/${params.id}`),
    fetch(`${env.apiUrl}/feedback/${params.id}`, { cache: 'no-cache' }),
  ]);

  const mentoring = (await mentoringPayload.json()) as MentoringDetails;
  const comments = (await commentsPayload.json()) as Feedback[];

  return (
    <main className="p-8">
      <section className="flex flex-col md:flex-row gap-8">
        <article className="flex flex-col gap-4 basis-3/5">
          <h1 className="text-3xl font-semibold text-center md:text-left">{mentoring.title}</h1>
          <h4 className="text-center md:text-left">{mentoring.description}</h4>
          <p className="text-xl text-center md:text-left font-light">
            {formatter(mentoring.price)}
          </p>
        </article>

        <aside className="w-full basis-2/5" id="feedback-form">
          <Card className="flex flex-col gap-2 justify-center items-center p-6">
            <CommentForm />
          </Card>
        </aside>
      </section>

      <section className="flex flex-col gap-4" id="comments-section">
        <h1 className="text-3xl font-semibold">Cometários</h1>
        {!comments.length && (
          <h2 className="text-center text-xl mt-8 text-zinc-400">
            Não existem comentários para essa mentoria. :(
          </h2>
        )}
        {comments.map((comment) => (
          <Comments key={comment.id} comment={comment} />
        ))}
      </section>
    </main>
  );
}
