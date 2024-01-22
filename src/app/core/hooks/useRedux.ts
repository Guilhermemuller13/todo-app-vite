import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/storeTypes";

export const useAppDispatch = () => useDispatch<AppDispatch>();
