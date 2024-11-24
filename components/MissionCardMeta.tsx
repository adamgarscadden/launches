import { SpaceXIntCardMeta } from '../APIResponsesTypes';

const MissionCardMeta = ({ title, text, multiples }: SpaceXIntCardMeta): JSX.Element => {
  return (
    <div className="flex flex-col mb-7" data-testid="mission-card-meta">
      {title && (
        <h3 className="font-mono mr-1 font-semibold" data-testid="mission-card-meta-title" aria-label="Meta title">
          {title}
        </h3>
      )}
      {text && !multiples && (
        <p className="font-mono" data-testid="mission-card-meta-text">
          {text}
        </p>
      )}
      {multiples && (
        <ul className="font-mono" data-testid="mission-card-meta-multiples">
          {multiples.map((single, index) => (
            <li key={`${single}-${index}`} className="block">
              {single}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MissionCardMeta;
