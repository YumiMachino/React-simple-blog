import { useState, useEffect } from 'react';

 /*this function runs everytime rendered, if [] is added at the end, only the first time rendered. Also specific states are changed. good place to fetch*/
    /*Json usage; npx json-server --watch data/db.json --port 8000 */

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        const abortCont = new AbortController();

        // console.log('use effect ran');
        // console.log(name);
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort();

    },[url]);

    return { data, isPending, error }
}

export default useFetch;