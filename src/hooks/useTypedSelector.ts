import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/cart/rootReducer";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector