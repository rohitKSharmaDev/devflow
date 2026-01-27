import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import handleError from "@/lib/handlers/error";
import { api } from "@/lib/api";
import { auth } from "@/auth";

const questions: Question[] = [
  {
    _id: "1",
    title: "How to implement authentication in Next.js?",
    content:
      "I'm building a Next.js app and need to add user authentication. What are the best practices?",
    tags: [
      { _id: "tag1", name: "nextjs" },
      { _id: "tag2", name: "authentication" },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    createdAt: new Date("2023-10-01"),
    upvotes: 15,
    downvotes: 2,
    answers: 3,
    views: 150,
  },
  {
    _id: "2",
    title: "Best way to handle state in React?",
    content:
      "What's the recommended way to manage state in a large React application?",
    tags: [
      { _id: "tag3", name: "react" },
      { _id: "tag4", name: "state-management" },
    ],
    author: {
      _id: "author2",
      name: "Jane Smith",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    createdAt: new Date("2023-09-28"),
    upvotes: 22,
    downvotes: 1,
    answers: 5,
    views: 200,
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const session = await auth();

  console.log({ session });

  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-11.5 px-4 py-3 text-light-900!"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
