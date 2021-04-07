import { MemberList } from "../components/MemberList";
import { ModalAddMember } from "../components/ModalAddMember";

export const Members = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="bg-gray-300 h-20">
        <div className="float-left m-2 mt-6">
          <h1 className="text-gray-700 w-50">MEMBERS</h1>
        </div>
        <ModalAddMember />
      </div>
      <main className=" w-80">
        <MemberList />
      </main>
    </div>
  );
};
