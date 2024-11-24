import Head from 'next/head';

const MissionHeader = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="Information about SpaceX Launches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b p-5">
        <h1 className="font-sans uppercase text-2xl md:text-4xl" data-testid="mission-title">
          🚀 SpaceX Launches
        </h1>
      </header>
    </>
  );
};

export default MissionHeader;
