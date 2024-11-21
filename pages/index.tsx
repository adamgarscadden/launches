import { fetchSpaceXData } from '../utils/fetchSpaceXData';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import MissionHeader from '../components/MissionHeader';
import MissionMain from '../components/MissionMain';
import dynamic from 'next/dynamic';
import { SpaceXIntAPIResponse } from '../APIResponsesTypes';

const MissionFooter = dynamic(() => import('../components/MissionFooter'), { ssr: false });

export async function getStaticProps() {
  try {
    const data = await fetchSpaceXData();
    return {
      props: { spaceXData: data.slice(0, 50) },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default function Home({ spaceXData }: { spaceXData: SpaceXIntAPIResponse[] }): JSX.Element {
  return (
    <>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="Browse recent SpaceX launches." />
      </Head>
      <MissionHeader />
      <ErrorBoundary>
        <MissionMain data={spaceXData} />
      </ErrorBoundary>
      <MissionFooter />
    </>
  );
}
