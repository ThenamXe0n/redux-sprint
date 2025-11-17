import { useRef, useState } from "react";

function ExampleForm() {
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(null);
  const debounceFnRef = useRef();

  console.log("name is ", name);

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 5) {
      setError("name lenght should be grater than 5 characters");
      return;
    }

    let payload = {
      studentName: name,
      email: email,
    };
    console.log("payload", payload);
  }

  function handleSetNameValue(e) {
    setname(e.target.value);
    if (name.length > 5) {
      setError(null);
    } else {
      setError("name lenght should be grater than 5 characters");
    }
  }

  return (
    <section className="flex items-center h-screen justify-center">
      <form onSubmit={handleSubmit} className="p-5 border  rounded-md ">
        <label htmlFor="name">Name</label>
        <br />
        <input
          defaultValue={"ali "}
          onChange={(e) => {
            // clearTimeout(debounceFnRef.current);

             setTimeout(() => {
              handleSetNameValue(e);
            }, 4000);
          }}
          className="border p-2"
          type="text"
          placeholder="enter your name"
          name="name"
          id="name"
        />
        {error && error.length > 1 && <p className="text-red-500"> *{error}</p>}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border p-2"
          type="email"
          placeholder="enter your email e.g. name@example.com"
          id="email"
          name="email"
        />
        <br />
        <button className="bg-blue-600 rounded-md text-center p-2 m-3 text-white">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ExampleForm;
