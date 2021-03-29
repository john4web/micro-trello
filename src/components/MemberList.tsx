import { useDispatch, useSelector } from "react-redux";
import { MemberItem } from "./MemberItem";
import { toggleMember } from "../store/memberSlice";
import { useFilteredMembers } from "../hooks/useFilteredMembers";
import styled from "styled-components";

export const MemberList = () => {
  const dispatch = useDispatch();
  const filteredMembers = useFilteredMembers();

  return (
    <List>
      {filteredMembers.map((member) => (
        <MemberItem
          key={member.id}
          member={member}
          onToggle={() => dispatch(toggleMember(member))}
        />
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
