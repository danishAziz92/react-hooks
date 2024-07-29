import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useAsync(callback, dependencies=[]) {
    console.log("use async rendering");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const memoizedCallback = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback().
        then(res => setValue(res)).
        catch(err => setError(err)).
        finally(() => setLoading(false))
    }, dependencies);

    useEffect(() => {
        memoizedCallback();
    }, [memoizedCallback])
    

    return { loading, error, value }
}