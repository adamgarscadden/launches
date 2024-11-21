import { SpaceXIntAPIResponse } from '../APIResponsesTypes';
import MissionFooter from '../components/MissionFooter';
import MissionHeader from '../components/MissionHeader';
import MissionMain from '../components/MissionMain';

export async function getStaticProps() {
  const res = await fetch('https://api.spacexdata.com/v5/launches');
  const data: Array<SpaceXIntAPIResponse> = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { spacexData: data.slice(0, 50) },
  };
}

export default function Home({ spacexData }: { spacexData: SpaceXIntAPIResponse[] }): JSX.Element {
  return (
    <>
      <MissionHeader />
      <MissionMain data={spacexData} />
      <MissionFooter />
    </>
  );
}
