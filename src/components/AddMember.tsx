import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../store/memberSlice";
import { Button } from "./Button";
import { ErrorMessage } from "./Error";
import { Input } from "./Input";
import styled from "styled-components";

export const AddMember = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [skill, setSkill] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onAdd = () => {
    if (firstname !== "") {
      dispatch(addMember(firstname));
      setFirstName("");
    } else {
      setError(true);
    }

    if (lastname !== "") {
      dispatch(addMember(lastname));
      setLastName("");
    } else {
      setError(true);
    }

    if (job !== "") {
      dispatch(addMember(job));
      setJob("");
    } else {
      setError(true);
    }

    if (skill !== "") {
      dispatch(addMember(skill));
      setSkill("");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Row>
        First Name:
        <Input
          value={firstname}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        Last Name:
        <Input
          value={lastname}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        Job:
        <Input value={job} onChange={(e) => setJob(e.currentTarget.value)} />
        Skill:
        <Input
          value={skill}
          onChange={(e) => setSkill(e.currentTarget.value)}
        />
        <Button onClick={onAdd}>Add</Button>
      </Row>
      {error && <ErrorMessage>Input cannot be empty</ErrorMessage>}
    </div>
  );
};

const Row = styled.div`
  display: flex;
`;
