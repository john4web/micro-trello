import { MemberList } from "../components/MemberList";
import { ModalAddMember } from "../components/ModalAddMember";

export const Members = () => {
  return (
    <div className="bg-gray-100 w-full overflow-auto">
      <div className="bg-gray-300 h-20">
        <div className="float-left m-2 mt-6">
          <h1 className="text-gray-700 w-50">MEMBERS</h1>
        </div>
        <ModalAddMember />
      </div>
      <main className="grid grid-rows-3 gap-1 grid-flow-col">
        <MemberList />
      </main>
    </div>
  );
};
