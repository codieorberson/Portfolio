import { JobDetails } from "./JobDetails";

export interface Jobs extends JobDetails {
  AllDetails: string[];
  ShowDetails: boolean;
  ButtonText: string;
}
