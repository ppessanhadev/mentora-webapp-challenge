'use client';

import { useState } from 'react';
import { Loader2 as Loading } from 'lucide-react';

import { ListCard } from '@/components/list-card';
import { InfiniteScroll } from '@/components/ui/infinite-scroll';
import { MentoriesCardResponse, MentoringSimplified } from '@/types/Mentoring';

export function HomeCards() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [mentories, setMentories] = useState<MentoringSimplified[]>([]);

  async function next() {
    setLoading(true);

    const response = await fetch(`/api/mentoring?page=${page}`);
    const { items, count } = (await response.json()) as MentoriesCardResponse;

    setMentories((prev) => [...prev, ...items]);
    setPage((prev) => prev + 1);

    if (mentories.length >= count) {
      setHasMore(false);
    }

    setLoading(false);
  }

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4 flex-wrap">
        {mentories.map((mentoring) => (
          <ListCard key={mentoring.id} {...mentoring} />
        ))}
      </section>
      <InfiniteScroll hasMore={hasMore} isLoading={loading} next={next} threshold={0}>
        {hasMore && (
          <Loading className="relative top-0 right-0 my-4 mx-auto h-8 w-8 animate-spin" />
        )}
      </InfiniteScroll>
    </>
  );
}
