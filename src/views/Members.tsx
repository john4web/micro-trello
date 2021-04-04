import { MemberList } from "../components/MemberList";
import { ModalAddMember } from "../components/ModalAddMember";

export default function App() {
  return (
    <div className="App">
      <MemberList />

      <ModalAddMember />
    </div>
  );
}
