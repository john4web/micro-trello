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
  tasks?: Task[];
  projectID: string;
};

export type Task = {
  id: string;
  projectID: string;
  columnID: string;
  name: string;
  team: Member[];
  deadline: string;
};

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};
