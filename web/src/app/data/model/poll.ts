import {PollTarget} from "./pollTarget";
import {PollQuestion} from "./pollQuestion";

export class Poll {
  id: number;
  title: string;
  startDateAH: string;
  startDateAG: string;
  endDateAH: string;
  endDateAG: string;
  description: string;
  targetedDeptEmp: string;
  userCreated: number;
  dateCreated: string;
  status: string;

  pollQuestionsList: PollQuestion[];
  pollTargetList: PollTarget[];
}
