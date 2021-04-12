import { ProjectList } from "../components/ProjectList";
import { ModalAddProject } from "../components/ModalAddProject";
export const Home = () => {
  return (
    <div className="bg-gray-100 w-full overflow-auto">
      <div className="bg-gray-300 h-20">
        <div className="float-left m-2 mt-6">
          <h1 className="text-gray-700 w-50">PROJECT OVERVIEW</h1>
        </div>
        <ModalAddProject />
      </div>
      <main className="grid grid-rows-3 gap-1 grid-flow-col">
        <ProjectList />
      </main>
    </div>
  );
};
