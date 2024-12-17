import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartState } from "../../host/src/store/slice/hostSlice";

export default function ParentSearchComp() {
  const searchstate = useSelector((state) => state.module.searchstate);
  console.log("searchstate: ", searchstate);
  return <div>ParentSearchComp</div>;
}
