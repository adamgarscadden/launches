import { SpaceXIntCardMeta } from '../APIResponsesTypes';

const MissionCardMeta = ({ title, text, multiples }: SpaceXIntCardMeta): JSX.Element => {
  return (
    <span className="flex flex-col mb-7" data-testid="mission-card-meta">
      {title && (
        <h3 className="font-mono mr-1 font-semibold" data-testid="mission-card-meta-title">
          {title}
        </h3>
      )}
      {!multiples && text && (
        <h4 className="font-mono" data-testid="mission-card-meta-text">
          {text}
        </h4>
      )}
      {multiples && (
        <h4 className="font-mono" data-testid="mission-card-meta-multiples">
          {multiples.map((single) => (
            <span className="block">{single}</span>
          ))}
        </h4>
      )}
    </span>
  );
};

export default MissionCardMeta;
