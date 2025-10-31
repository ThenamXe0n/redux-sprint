import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/ui/Loader";
import { useDispatch, useSelector } from "react-redux";
import { removeLoader, setUserDetails } from "./redux/user/userSlice";

function App() {
  let dispatch = useDispatch();
  let loading = useSelector((state) => state.user.isLoading);
  let userName = useSelector((state)=>state.user.userDetails.status)
  let isLoggedin = "NO";

  function handleSetUserDetails() {
    dispatch(
      setUserDetails({
        data: { name: "tohid", status: "online", number: 987987 },
      })
    );
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeLoader());
      console.log("called");
    }, 4000);
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1>user name</h1>
      <br />
      <h2>{userName}</h2>
      <h3>logged in status : {isLoggedin}</h3>
      <button onClick={handleSetUserDetails}>set user</button>
    </>
  );
}

export default App;
