import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-auth-light dark:bg-auth-dark px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-130 sm:px-8">
        <div className="flex item-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">To get your questions answered</p>
          </div>

          <Image
            src="/images/site-logo.svg"
            width={50}
            height={50}
            alt="DevFlow Logo"
            className="mt-6 mb-4 object-contain"
          />
        </div>
        {children}
        
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
