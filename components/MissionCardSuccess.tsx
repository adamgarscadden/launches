import { SpaceXIntCardSucess } from '../APIResponsesTypes';

const MissionCardSuccess = ({ heading, success }: SpaceXIntCardSucess): JSX.Element => {
  return (
    <span className="flex flex-col mb-7" data-testid="mission-card-success">
      <h3 className="font-mono mr-1 font-semibold">{heading}</h3>

      <h4 className="font-mono">
        The mission was a
        {success ? (
          <>
            <span className="border-2 border-green p-1 ml-1 text-green" data-testid="mission-card-success-true">
              success
            </span>
            <span> 🤩</span>
          </>
        ) : (
          <>
            <span className="border-2 border-red p-1 ml-1 text-red" data-testid="mission-card-success-false">
              failure
            </span>
            <span> 😣</span>
          </>
        )}
      </h4>
    </span>
  );
};

export default MissionCardSuccess;
