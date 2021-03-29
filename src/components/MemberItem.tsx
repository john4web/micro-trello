import { Member } from "../types/member";
import styled from "styled-components";

type MemberItemProps = {
  member: Member;
  onToggle: () => void;
};

export const MemberItem = ({ member, onToggle }: MemberItemProps) => {
  return (
    <MemberItemContainer>
      {member.firstname}
      {member.lastname}
      {member.job}
      {member.skill}
    </MemberItemContainer>
  );
};

const MemberItemContainer = styled.div`
  padding: 4px;

  & + & {
    margin-top: 4px;
  }
`;
