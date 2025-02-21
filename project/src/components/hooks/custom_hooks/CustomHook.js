import { useState, useEffect } from "react";

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