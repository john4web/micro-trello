import { combineReducers, createStore } from "@reduxjs/toolkit";
import memberReducer, {
  addMember,
  removeMember,
  updateMember,
} from "../store/memberSlice";
import projectReducer from "../store/projectSlice";
import { Member } from "../types/types";

describe("Member Component", () => {
  const reducers = combineReducers({
    member: memberReducer,
    project: projectReducer,
  });
  const testStore = createStore(reducers, {});

  const member1: Member = {
    id: "m1",
    firstname: "John",
    lastname: "Doe",
    job: "Test member component",
    skill: "No skill",
    photo: "",
  };

  const member2: Member = {
    id: "m2",
    firstname: "Lisa",
    lastname: "Huber",
    job: "Test member component",
    skill: "No skill",
    photo: "",
  };

  test("addMembers", () => {
    testStore.dispatch(addMember(member1));
    expect(testStore.getState().member.members.length).toEqual(1);
    testStore.dispatch(addMember(member2));
    expect(testStore.getState().member.members.length).toEqual(2);
  });

  test("updateMember", () => {
    const member2update: Member = {
      id: testStore.getState().member.members[1].id,
      firstname: "Max",
      lastname: "Mustermann",
      job: "Test update member component",
      skill: "webdev pro",
      photo: "",
    };
    testStore.dispatch(updateMember(member2update));
    expect(testStore.getState().member.members[1].firstname).toEqual("Max");
    expect(testStore.getState().member.members[1].lastname).toEqual(
      "Mustermann"
    );
    expect(testStore.getState().member.members[1].job).toEqual(
      "Test update member component"
    );
    expect(testStore.getState().member.members[1].skill).toEqual("webdev pro");
  });

  test("removeMember", () => {
    testStore.dispatch(removeMember(testStore.getState().member.members[0].id));
    expect(testStore.getState().member.members.length).toEqual(1);
    expect(testStore.getState().member.members[0].firstname).toEqual("Max");
  });
});
