import { ProjectList } from "../components/ProjectList";
import { ModalAddProject } from "../components/ModalAddProject";
export const Home = () => {
  return (
    <div className="bg-yellow-100 w-full">
      <h1>HOME</h1>

      <ModalAddProject />

      <main className="flex">
        <ProjectList />
      </main>
    </div>
  );
};
