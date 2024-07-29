import React, { useState } from 'react'
import { useAsync } from '../../hooks/useAsync'
import { useFetch } from '../../hooks/useFetch';

const UseAsyncFetchComp = () => {
    const [count, setCount] = useState(1);
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = true;
            setTimeout(() => {
                success ? resolve('Value Received') : reject('Oops! Something went wrong');
            }, 3000);
        });
    });

    const { loading: todoLoading, error: todoError, value: todoValue } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${count}`,
        {},
        [count]
    );

  return (
    <div>
        <h2>Use Async and Use Fetch Examples</h2>
        <div>
            Loading status:: {loading.toString()}
        </div>
        {(!loading && 
            <div>
                Promise Resolved
                <br />
                Value: {value}
                <br />
                Error: {error}
            </div>
        )}
        <h4>TODO API Fetching</h4>
        <div>
            TODO API Loading status:: {todoLoading.toString()}
        </div>
        {(!todoLoading && 
            <div>
                TODO API Promise Resolved
                <br />
                Value: {JSON.stringify(todoValue)}
                <br />
                Error: {JSON.stringify(todoError)}
            </div>
        )}
        Count:: {count}
        <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  )
}

export default UseAsyncFetchComp