export type Project = {
  id: string;
  name: string;
  team: Member[];
  color: string;
  columns?: Column[];
};

export type Member = {
  id: string;
  firstname: string;
  lastname: string;
  job: string;
  skill: string;
};

export type Column = {
  id: string;
  name: string;
};

export type Task = {
  id: string;
  name: string;
  assignedMember: string; //sollte dann vom Typ Member sein
  duration: string;
  category: string;
};
