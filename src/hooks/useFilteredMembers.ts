import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo } from "react";

export const useFilteredMembers = () => {
  const { members } = useSelector((state: RootState) => state.member);

  return useMemo(() => {
    return members.filter((member) => member.firstname);
  }, [members]);
};
