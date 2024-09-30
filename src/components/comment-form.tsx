'use client';

import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CommentRatings as Ratings } from '@/components/ui/ratings';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useParams } from 'next/navigation';

const formSchema = z.object({
  name: z
    .string()
    .min(4, 'Nome precisa de ao menos 4 caracteres.')
    .max(30, 'Máximo de 30 caracteres para nome.'),
  message: z
    .string()
    .min(4, 'Comentário precisa de ao menos 4 caracteres.')
    .max(1600, 'Máximo de 1600 caracteres para comentário.'),
  stars: z.coerce.number().int().gte(1).lte(5),
});

type FormSchema = z.infer<typeof formSchema>;

export function CommentForm() {
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', message: '', stars: 5 },
  });

  async function onSubmit(values: FormSchema) {
    setLoading(true);
    await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ ...values, mentoring_id: +params.id }),
    });
    setLoading(false);

    form.reset();
    form.setValue('stars', 5);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>

              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>

              <FormMessage className="font-thin" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentário</FormLabel>

              <FormControl>
                <Textarea
                  placeholder="Não poupe palavras, faça um comentário sobre a mentoria!"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage className="font-thin" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stars"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Avaliação</FormLabel>

              <FormControl>
                <Ratings rating={field.value} variant="yellow" onRatingChange={field.onChange} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-green-700 text-white hover:bg-green-900"
          disabled={loading}
        >
          Enviar comentário
        </Button>
      </form>
    </Form>
  );
}
