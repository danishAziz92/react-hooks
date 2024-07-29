import React from "react";
import UseLocalStorageComp from "./custom-hook-comps/UseLocalStorageComp";
import UseTimeoutComp from "./custom-hook-comps/UseTimeoutComp";
import UseDebounceComp from "./custom-hook-comps/UseDebounceComp";
import UseUpdateEffectComp from "./custom-hook-comps/UseUpdateEffectComp";
import UsePreviousComp from "./custom-hook-comps/UsePreviousComp";
import UseStateWithHistoryComp from "./custom-hook-comps/UseStateWithHistoryComp";
import UseAsyncFetchComp from "./custom-hook-comps/UseAsyncFetchComp";

const CustomLocalStorageHook = () => {
    console.log('parent component rendering');
  //Custom timeout hook usage
  

  return (
    <div>
      <UseLocalStorageComp />
      <UseTimeoutComp />
      <UseDebounceComp />
      <UseUpdateEffectComp />
      <UsePreviousComp />
      <UseStateWithHistoryComp />
      <UseAsyncFetchComp />
    </div>
  );
};

export default CustomLocalStorageHook;
