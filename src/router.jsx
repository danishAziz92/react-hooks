import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import UseStateHook from "./hook-components/UseStateHook";
import UseEffectHook from "./hook-components/UseEffectHook";
import UseContextHook from "./hook-components/context-hook-comps/UseContextHook";
import UseRefHook from "./hook-components/UseRefHook";
import UseMemoHook from "./hook-components/UseMemoHook";
import UseCallbackHook from "./hook-components/UseCallbackHook";
import UseReducerHook from "./hook-components/UseReducerHook";
import UseTransitionHook from "./hook-components/UseTransitionHook";
import UseDeferredValueHook from "./hook-components/UseDeferredValueHook";
import UseLayoutEffect from "./hook-components/UseLayoutEffect";
import CustomLocalStorageHook from "./hook-components/CustomLocalStorageHook";
import OtherConceptsContainer from "./other-react-concepts/OtherConceptsContainer";
import Container from "./other-react-concepts/ReduceRendersUsingRef/Container";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/useState" element={<UseStateHook />} />
      <Route path="/useEffect" element={<UseEffectHook />} />
      <Route path="/useContext" element={<UseContextHook />} />
      <Route path="/useRef" element={<UseRefHook />} />
      <Route path="/useMemo" element={<UseMemoHook />} />
      <Route path="/useCallback" element={<UseCallbackHook />} />
      <Route path="/useReducer" element={<UseReducerHook />} />
      <Route path="/useTransition" element={<UseTransitionHook />} />
      <Route path="/useDeferredValue" element={<UseDeferredValueHook />} />
      <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
      <Route path="/custom/local-storage" element={<CustomLocalStorageHook />} />
      <Route path="/concepts" element={<OtherConceptsContainer />}>
        <Route path="reduce-renders-using-ref" element={<Container />} />
      </Route>
    </Route>
  )
);
