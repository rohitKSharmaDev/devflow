import ROUTES from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import TagCard from '../cards/TagCard';
import { getHotQuestions } from '@/lib/actions/question.action';
import DataRenderer from '../DataRenderer';

const RightSidebar = async () => {
  const { success, data: hotQuestions, error } = await getHotQuestions();

  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 h-screen w-87.5 flex flex-col border-l p-6 overflow-y-auto gap-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

      <DataRenderer
        data={hotQuestions}
        empty={{
          title: "No questions found",
          message: "No questions have been asked yet.",
        }}
        success={success}
        error={error ? { ...error, details: error.details || {} } : undefined}
        render={(hotQuestions) => (
          <div className="mt-7 flex w-full flex-col gap-7.5">
            {hotQuestions.map(({ _id, title }, index) => {
              const isEven = index % 2 === 0;

              return (
                <div className="flex gap-3" key={_id}>
                  <Image
                    src={isEven ? '/icons/question-mark-icon-2.svg' : '/icons/question-mark-icon-1.svg'}
                    alt="Question Mark Icon"
                    width={24}
                    height={24}
                  />
                  <Link
                    href={ROUTES.QUESTION(_id)}
                    className="flex cursor-pointer items-center justify-between w-full"
                  >
                    <p className="body-medium text-dark500_light700 line-clamp-2">
                      {title}
                    </p>

                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Arrow Right Icon"
                      width={20}
                      height={20}
                      className="invert-colors"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      />

      {/* <div className="mt-16">
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
      </div> */}
    </section>
  );
}

export default RightSidebar