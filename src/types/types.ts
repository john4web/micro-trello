export type Project = {
  id: string;
  name: string;
  team: string;
  color: string;
  category: string;
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

export type Category = {
  id: string;
  name: string;
};
