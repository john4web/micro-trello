import { MemberList } from "../components/MemberList";
import React from "react";
import { ModalMemberContent } from "../components/ModalMemberContent";

export default function App() {
  return (
    <div className="App">
      <MemberList />

      <ModalMemberContent />
    </div>
  );
}
