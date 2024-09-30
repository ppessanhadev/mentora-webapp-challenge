import { env } from '@/config/env';
import { ListCard } from '@/components/list-card';
import { MentoriesCardResponse } from '@/types/Mentoring';

export default async function Home() {
  const response = await fetch(`${env.apiUrl}/mentoring`);
  const { items: mentories } = (await response.json()) as MentoriesCardResponse;

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4 flex-wrap align-">
      {mentories.map((mentoring) => (
        <ListCard key={mentoring.id} {...mentoring} />
      ))}
    </main>
  );
}
