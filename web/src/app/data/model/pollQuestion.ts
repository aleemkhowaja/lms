import {PollItem} from "./pollItem";

export class PollQuestion {
  id: number;
  pollId: number;
  title: string;
  type: string;
  parentId: number;
  mandatory: number;
  answerType: string;
  userCreated: number;
  dateCreated: string;

  subQuestionsList: PollQuestion[];
  pollItemsList: PollItem[];

  text: string = '';
}
