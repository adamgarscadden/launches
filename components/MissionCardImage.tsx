import { SpaceXIntCardImage } from '../APIResponsesTypes';
import Image from 'next/image';

const MissionCardImage = ({ image, alt }: SpaceXIntCardImage): JSX.Element => {
  return (
    <div className="absolute right-9 top-5 w-1/5" data-testid="mission-card-image">
      <Image src={image} alt={alt && alt} width={200} height={100} />
    </div>
  );
};

export default MissionCardImage;
