import "react-redux";

import { RootState } from "../redux/storeTypes";

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}
