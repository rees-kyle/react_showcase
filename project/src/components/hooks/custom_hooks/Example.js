const Example = () => {
    return (
        <div>
            <br/>
            <hr/>
            <h2>Example of a Custom Hook</h2>
            <p>Let’s create a simple custom hook that fetches data from an API.</p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Fetch error:", error);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data: data || [], loading };
}

export default useFetch;
`}
                </code>
            </pre>
        </div>
    );
};

export default Example;