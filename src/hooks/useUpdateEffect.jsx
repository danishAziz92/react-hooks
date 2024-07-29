import { useEffect, useRef } from "react"

export const useUpdateEffect = (callback, dependencies) => {
    const isFirstRender = useRef(true);
  const isFirstEffect = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Skip running effect on first effect cleanup (caused by Strict Mode double invocation)
    if (isFirstEffect.current) {
      isFirstEffect.current = false;
      return;
    }

    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}