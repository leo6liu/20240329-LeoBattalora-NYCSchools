import Image from "next/image";
import Link from "next/link";
import * as icons from "../../components/icons";

export default async function Page() {
  return (
    <>
      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-sm flex-col space-y-4 px-4 py-12 text-primary dark:text-secondary-focus-dark">
        <h1 className="text-4xl font-semibold text-primary dark:text-primary-dark">
          People
        </h1>
        <p className="italic text-quaternary">
          Because code doesn&apos;t write itself... yet :)
        </p>

        {/* people */}
        <div className="grid grid-flow-row grid-cols-1 gap-y-16 pt-20">
          {/* Leo Battalora */}
          <div className="flex w-full flex-wrap items-center justify-center gap-8 text-secondary dark:text-secondary-dark sm:flex-nowrap">
            <div className="w-64 overflow-hidden rounded-2xl">
              <Image
                alt="Leo"
                src="/assets/people/images/battalora_leo_1000x1000.jpg"
                layout="responsive"
                width="500"
                height="500"
                className="z-0"
              />
            </div>
            <div>
              <h2 className="pt-2 text-2xl font-semibold">Leo Battalora</h2>
              <p className="">
                <span className="font-bold">Role:</span> Software Engineer
              </p>
              <p>
                <span className="font-bold">Resume/CV: </span>
                <Link
                  href="/assets/people/resumes/battalora_leo_2024_03_08.pdf"
                  passHref
                  legacyBehavior
                >
                  <a
                    className="underline duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
                    target="_blank"
                  >
                    PDF
                  </a>
                </Link>
              </p>
              <div className="flex items-center space-x-2 pt-1">
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/leo6"
                  passHref
                  legacyBehavior
                >
                  <a
                    title="LinkedIn"
                    className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
                  >
                    <icons.PhLinkedinLogoBold className="h-6" />
                  </a>
                </Link>
                {/* GitHub */}
                <Link href="https://github.com/leo6liu" passHref legacyBehavior>
                  <a
                    title="GitHub"
                    className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
                  >
                    <icons.UilGithubAlt className="h-6" />
                  </a>
                </Link>
                {/* Email */}
                <Link
                  href="mailto:leo.battalora@gmail.com"
                  passHref
                  legacyBehavior
                >
                  <a
                    title="Email"
                    className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
                  >
                    <icons.UilEnvelopeAlt className="h-6" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
