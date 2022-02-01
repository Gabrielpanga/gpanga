// import Link from 'next/link';

// import Timeline from '../components/Timeline';
import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Gabriel Pan Gantes">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Gabriel Pan Gantes.&nbsp;
            {/* <a
              href="https://masteringnextjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mastering Next.js
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://react2025.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              React 2025.
            </a>
            &nbsp;I work at ▲Vercel as the Director of Developer Relations. */}
          </p>
          <p>
            I'm still building my website, so please check back soon.
            {/* I’ve spoken across the country at conferences and meet-ups about
            front-end development, design, and recruiting. I write about
            development, tech careers, and my personal life on&nbsp;
            <Link href="/newsletter">
              <a>my newsletter.</a>
            </Link> */}
          </p>
        </div>
        {/* <Timeline /> */}
      </div>
    </Container>
  );
}
