import Link from "next/link";
import * as icons from "../components/icons";

function Footer(): JSX.Element {
  return (
    <div className="flex w-full justify-center text-zinc-600 dark:text-zinc-400 ">
      <div className="mt-16 flex w-2/3 items-center justify-center space-x-3 border-t border-zinc-600 py-10 dark:border-zinc-400">
        <Link href="https://twitter.com/subpar_program" passHref legacyBehavior>
          <a
            className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
            target="_blank"
          >
            <icons.UilTwitterAlt className="h-6" />
          </a>
        </Link>
        <Link
          href="https://github.com/leo6liu"
          passHref
          legacyBehavior
        >
          <a
            className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
            target="_blank"
          >
            <icons.UilGithubAlt className="h-6" />
          </a>
        </Link>
        <Link href="mailto:leo.battalora@gmail.com" passHref legacyBehavior>
          <a className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300">
            <icons.UilEnvelopeAlt className="h-6" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
