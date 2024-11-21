import moment from 'moment';
import { SpaceXIntAPIResponse } from '../APIResponsesTypes';
import MissionCardFailures from './MissionCardFailures';
import MissionCardImage from './MissionCardImage';
import MissionCardMeta from './MissionCardMeta';
import MissionCardSuccess from './MissionCardSuccess';

const MissionCard = ({
  name,
  date_utc,
  cores,
  payloads,
  success,
  failures,
  links,
}: SpaceXIntAPIResponse): JSX.Element => {
  return (
    <article className="p-0 m-0 bg-white p-4 rounded-xl relative border" data-testid="mission-card">
      {name && <h2 className="font-sans w-full mb-4 text-2xl">{name}</h2>}
      <div className="flex flex-col">
        <MissionCardMeta title="Launch Date" text={moment(date_utc).format('MMMM Do YYYY, h:mm:ss a')} />
        <MissionCardMeta title="Core Serial" text={cores && cores[0].core} />
        <MissionCardMeta title="Payload id(s)" multiples={payloads} />
        {success !== null && <MissionCardSuccess heading="Mission Status" success={success} />}
        {!success && failures && <MissionCardFailures failures={failures[0].reason} />}
      </div>
      {links && links.patch.small && <MissionCardImage image={links.patch.small} alt={name + ' badge'} />}
    </article>
  );
};

export default MissionCard;
