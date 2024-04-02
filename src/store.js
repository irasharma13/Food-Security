import { configureStore } from "@reduxjs/toolkit";
import CountryRangeSlice from "./CountryRangeSlice";

export const store = configureStore({
  reducer: { countryRange: CountryRangeSlice },
});
