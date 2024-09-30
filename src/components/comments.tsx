'use client';

import { Feedback } from '@/types/Feedback';
import { Card, CardContent } from '@/components/ui/card';
import { CommentRatings as Rating } from './ui/ratings';

type CommentsProps = { comment: Feedback };

export function Comments({ comment }: CommentsProps) {
  const date = new Date(comment.created_at).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card className="w-full p-6">
      <article className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl">{comment.name}</h2>
          <p className="text-xs">{date}</p>
        </div>

        <Rating rating={comment.stars} disabled />
      </article>

      <CardContent className="p-0">{comment.message}</CardContent>
    </Card>
  );
}
