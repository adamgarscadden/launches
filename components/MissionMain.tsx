import { SpaceXIntAPIResponse } from '../APIResponsesTypes';
import MissionCard from './MissionCard';

interface MissionMainProps {
  data: SpaceXIntAPIResponse[];
}

const MissionMain = ({ data }: MissionMainProps): JSX.Element => {
  return (
    <main className="bg-grey p-5" data-testid="mission-main">
      <section className="mx-auto px-4 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {data?.map(({ date_utc, name, cores, payloads, links, success, failures }) => (
            <MissionCard
              key={date_utc}
              name={name}
              date_utc={date_utc}
              cores={cores}
              payloads={payloads}
              links={links}
              success={success}
              failures={failures}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MissionMain;
