import { SpaceXIntAPIResponse } from "../APIResponsesTypes";

export async function fetchSpaceXData(): Promise<SpaceXIntAPIResponse[]> {
  const res = await fetch('https://api.spacexdata.com/v5/launches');
  if (!res.ok) throw new Error('Failed to fetch SpaceX data');
  const data: SpaceXIntAPIResponse[] = await res.json();
  return data;
}
