import { useDispatch } from "react-redux";
import { saveTxn } from "../types";

export default function FooterAction() {
  const dispatch = useDispatch();
  function saveHandler() {
    dispatch(saveTxn());
  }
  return (
    <>
      <button onClick={saveHandler}>Save</button>
    </>
  );
}
