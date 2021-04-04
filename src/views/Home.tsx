import { ProjectList } from "../components/ProjectList";
import React from "react";
import { ModalProjectContent } from "../components/ModalProjectContent";
export const Home = () => {
  return (
    <div className="bg-yellow-100 w-full">
      <h1>HOME</h1>

      <ModalProjectContent />

      <main className="flex">
        <ProjectList />
      </main>
    </div>
  );
};
