import { fetchSpaceXData } from '../utils/fetchSpaceXData';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import MissionHeader from '../components/MissionHeader';
import MissionMain from '../components/MissionMain';
import MissionFooter from '../components/MissionFooter';
import { SpaceXIntAPIResponse } from '../APIResponsesTypes';
import { useEffect, useState, useRef } from 'react';

export async function getStaticProps() {
  try {
    const data = await fetchSpaceXData();
    return {
      props: { spaceXData: data },
      revalidate: 60,
    };
  } catch {
    return { notFound: true };
  }
}

export default function Home({ spaceXData }: { spaceXData: SpaceXIntAPIResponse[] }): JSX.Element {
  const [lazyLoadedData, setLazyLoadedData] = useState<SpaceXIntAPIResponse[]>(spaceXData.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(4);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // console.log('spaceXData', spaceXData);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreData();
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [lazyLoadedData, currentIndex]);

  const loadMoreData = () => {
    if (currentIndex >= spaceXData.length) return;

    const nextIndex = currentIndex + 4;
    const nextPageData = spaceXData.slice(currentIndex, nextIndex);

    setLazyLoadedData((prevData) => [...prevData, ...nextPageData]);
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="Browse SpaceX launches." />
      </Head>
      <MissionHeader />
      <ErrorBoundary>
        <MissionMain data={lazyLoadedData} />
      </ErrorBoundary>
      <MissionFooter />
      {/* Infinite scroll trigger */}
      <div ref={loadMoreRef} style={{ height: '50px', background: 'transparent' }} />
    </>
  );
}
