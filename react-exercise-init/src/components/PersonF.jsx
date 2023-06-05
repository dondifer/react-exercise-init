const Person = (props) => {
  return (
    <div>
      <p>
        <span>Name: {props.name}</span>
      </p>
      <p>
        <span>Surname: {props.surname}</span>
      </p>
      <p>
        <span>Age: {props.age}</span>
      </p>
    </div>
  );
};

export default Person;
