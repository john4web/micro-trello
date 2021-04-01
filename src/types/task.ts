import { Member } from "../types/member";
export type Task = {
  id: string;
  name: string;
  assignedMember: string; //sollte dann vom Typ Member sein
  duration: string;
  category: string;
};
