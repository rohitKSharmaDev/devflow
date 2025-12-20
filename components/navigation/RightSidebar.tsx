import ROUTES from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import TagCard from '../cards/TagCard';

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title: "How to create a custom hook in React?",
    },
    {
      _id: "2",
      title: "What is the difference between let and var in JavaScript?",
    },
    {
      _id: "3",
      title: "How to optimize performance in a React application?",
    },
    {
      _id: "4",
      title: "How to use React Router?",
    },
    {
      _id: "5",
      title: "How to manage state in a large-scale React app?",
    },
  ];
  
  const popularTags = [
    {
      _id: "1",
      name: "JavaScript",
      questions: 100,
    },
    {
      _id: "2",
      name: "React",
      questions: 80,
    },
    {
      _id: "3",
      name: "CSS",
      questions: 60,
    },
    {
      _id: "4",
      name: "Node.js",
      questions: 50,
    },
    {
      _id: "5",
      name: "TypeScript",
      questions: 40,
    },
  ];

  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 h-screen w-87.5 flex flex-col border-l p-6 overflow-y-auto gap-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

      <div className="mt-7 flex flex-col w-full gap-7.5">
        {hotQuestions.map(({ _id, title }) => (
          <Link
            href={ROUTES.PROFILE(_id)}
            key={_id}
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">{title}</p>

            <Image
              src="/icons/arrow-right.svg"
              alt="Arrow Right Icon"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard 
              key={_id} 
              _id={_id}
              name={name} 
              questions={questions} 
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar