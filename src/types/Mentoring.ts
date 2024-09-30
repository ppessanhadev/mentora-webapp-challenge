export type MentoringSimplified = {
  id: number;
  title: string;
  price: number;
};

export type MentoringDetails = MentoringSimplified & {
  description: string;
};

export type MentoriesCardResponse = {
  items: MentoringSimplified[];
  count: number;
};
