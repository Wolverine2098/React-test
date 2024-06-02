import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This about us</h1>
      <h2>This is a react dummy project</h2>
      {/* <User name={"Dummy Name Function"} location={"New Delhi"} /> */}
      <UserClass name={"Dummy Name Class"} location={"New Delhi"} />
    </div>
  );
};

export default About;
