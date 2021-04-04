import { MemberList } from "../components/MemberList";
import { ModalAddMember } from "../components/ModalAddMember";

export const Members = () => {
  return (
    <div className="App">
      <h1>MEMBERS</h1>
      <MemberList />

      <ModalAddMember />
    </div>
  );
};
