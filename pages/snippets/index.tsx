import { allSnippets } from '.contentlayer/data';
import Container from 'components/Container';
import FunctionCard from 'components/FunctionCard';
import { pick } from 'lib/utils';
import type { InferGetStaticPropsType } from 'next';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Code Snippets – Gabriel Pan Gantes"
      description="A collection of code snippets – including serverless functions, Node.js scripts, and infrascture as a code solutions."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          The following snippets are some of the solutions I've made for different projects I've worked on.
          Some are serverless functions, pipelines tasks, Node.js scripts, and infrastructure as code solutions.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ['slug', 'title', 'logo', 'description'])
  );

  return { props: { snippets } };
}
