export interface SpaceXIntAPIResponse {
  name: string;
  date_utc: number;
  cores: {
    core: number;
  };
  payloads: string[];
  links: {
    patch: {
      small: string
    }
  }
  success: boolean,
  failures: {
    reason: string
  }
}

export interface SpaceXIntCardMeta {
  title: string;
  text?: string;
  multiples?: string[];
}

export interface SpaceXIntCardSucess {
  heading: string;
  success: boolean;
}

export interface SpaceXIntCardFailures {
  failures: string;
}

export interface SpaceXIntCardImage {
  image: string;
  alt: string;
}