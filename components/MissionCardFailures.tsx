import { SpaceXIntCardFailures } from '../APIResponsesTypes';

const MissionCardFailures = ({ failures }: SpaceXIntCardFailures): JSX.Element => {
  return (
    <span className="flex flex-col mb-7" data-testid="mission-card-failures">
      <span className="flex flex-col mb-7">
        <h3 className="font-mono mr-1 font-semibold">Why did the mission fail?</h3>
        <h4 className="font-mono capitalize" data-testid="mission-card-failures-text">
          {failures}
        </h4>
      </span>
    </span>
  );
};

export default MissionCardFailures;
