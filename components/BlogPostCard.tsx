import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import cn from 'classnames';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';

export default function BlogPostCard({ title, slug, gradient, releaseDate = undefined  }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;


  const viewCount = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span className="ml-2 align-baseline capsize">
        {views ? new Number(views).toLocaleString() : '–––'}
      </span>
    </>
  )

  const releaseView = (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 58 58"
        stroke="currentColor"
        fill="none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M57.953,42.1c-0.116-0.367-0.434-0.634-0.814-0.688l-7.777-1.089l-3.472-6.78c-0.342-0.668-1.438-0.668-1.779,0
            l-3.472,6.78l-7.777,1.089c-0.381,0.054-0.698,0.32-0.814,0.688s-0.012,0.768,0.269,1.031l5.605,5.267L36.6,55.825
            c-0.066,0.373,0.084,0.752,0.388,0.978c0.305,0.227,0.712,0.262,1.049,0.089L45,53.363l6.964,3.528
            C52.106,56.965,52.262,57,52.416,57c0.211,0,0.421-0.066,0.597-0.197c0.304-0.226,0.454-0.604,0.388-0.978l-1.321-7.427
            l5.605-5.267C57.965,42.868,58.069,42.467,57.953,42.1z M50.315,47.311c-0.246,0.231-0.359,0.571-0.3,0.903l1.064,5.987
            l-5.628-2.852c-0.143-0.072-0.297-0.108-0.452-0.108s-0.31,0.036-0.452,0.108l-5.628,2.852l1.064-5.987
            c0.06-0.332-0.054-0.672-0.3-0.903l-4.479-4.207l6.225-0.872c0.322-0.045,0.603-0.244,0.751-0.534L45,36.194l2.818,5.504
            c0.148,0.29,0.429,0.489,0.751,0.534l6.225,0.872L50.315,47.311z"
        />
        <polygon
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          points="18.058,41.078 18.058,18 16.058,18 11,21 11,23 16.058,20 16.058,41.078"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M34.302,38.018c1.171-1.652,1.756-3.43,1.756-5.334v-7.345c0-2.042-0.712-3.773-2.134-5.196
          c-1.423-1.423-3.149-2.134-5.18-2.134s-3.757,0.711-5.179,2.134c-1.423,1.423-2.134,3.148-2.134,5.179s0.711,3.757,2.134,5.18
          c1.422,1.423,3.183,2.134,5.282,2.134s3.871-0.78,5.316-2.341v2.148c0,2.157-0.631,3.791-1.893,4.904
          c-1.262,1.112-2.753,1.669-4.474,1.669h-0.74v1.893h0.603c1.537,0,2.879-0.27,4.026-0.809S33.705,38.866,34.302,38.018z
          M32.599,29.176c-1.044,1.044-2.323,1.565-3.837,1.565c-1.515,0-2.8-0.521-3.854-1.565c-1.056-1.044-1.583-2.323-1.583-3.837
          c0-1.515,0.527-2.799,1.583-3.854c1.055-1.055,2.334-1.583,3.837-1.583s2.782,0.511,3.837,1.531
          c1.056,1.021,1.583,2.306,1.583,3.854S33.643,28.132,32.599,29.176z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M28,46H2V13h15h2h14h2h14v18c0,0.553,0.447,1,1,1s1-0.447,1-1V13v-1V1H35h-2H19h-2H0v11v1v34c0,0.553,0.447,1,1,1h27
          c0.553,0,1-0.447,1-1S28.553,46,28,46z M35,3h14v8H35V3z M19,3h14v8H19V3z M2,3h15v8H2V3z"
        />   
      </svg>
      <span className="ml-2 align-baseline capsize">
        {releaseDate ? new Date(releaseDate).toLocaleDateString() : '–––'}
      </span>
    </>
  )

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          'transform hover:scale-[1.01] transition-all',
          'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
          </div>
          <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
            {releaseDate ? releaseView : viewCount}
          </div>
        </div>
      </a>
    </Link>
  );
}
