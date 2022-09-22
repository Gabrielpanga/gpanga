import Link from 'next/link';
import Image from 'next/image';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/gpangantes">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/gabrielpanga">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row text-gray-400">
        Powered by {" "}
        <a href="https://nextjs.org" target="__blank" title="Next.js">
          <Image src="/logos/nextjs.svg" className="h-6 w-6 mx-1" alt="Next.js" width={24} height={24} />
        </a>{" "}
         and {" "}
        <a href="https://tailwindcss.com" target="__blank" title="Tailwind">
          <Image src="/logos/tailwind.svg" className="h-6 w-6 mx-1" alt="Tailwind" width={24} height={24} />
        </a>{" "}
        and deployed to {" "}
        <a href="https://vercel.com" target="__blank" title="Vercel">
          <Image src="/logos/vercel-logo.svg" className="h-6 w-6 mx-1" alt="Vercel" width={24} height={24} />
        </a>{" "}
      </div>
    </footer>
  );
}
