import { useState, ChangeEvent, FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const [person, setPerson] = useState({ name: "", age: 10 });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  const onNameChange = (event: ChangeEvent) => {
    setPerson({ ...person, name: event.target.value });
  };
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => onNameChange(event)}
          ref={nameRef}
          id="name"
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" className="form-control" type="number" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
