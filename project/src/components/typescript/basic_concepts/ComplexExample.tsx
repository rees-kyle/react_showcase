import { useEffect, useCallback, useState, useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';

type FetchData = () => Promise<void>;

function ComplexExample() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchData: FetchData = useCallback(async () => {
    console.log('[fetchData] Fetching data...');
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2 second delay
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      console.log('[fetchData] Data fetched:', result.title); // Keep logging the title
      setData('fetched'); // Just a placeholder to trigger display
    } catch (error) {
      console.error('[fetchData] Fetch error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!observerRef.current || hasFetched) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          console.log('[IntersectionObserver] Spinner is in view, starting fetch...');
          fetchData();
          setHasFetched(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchData, hasFetched]);

  return (
    <div>
      <br/>
      <hr/>
      <h3>More Complex Example With a Typed Dependency</h3>
      <h4>Code:</h4>
      <pre>
        <code>
          {`import { useEffect, useCallback, useState, useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';

type FetchData = () => Promise<void>;

function ComplexExample() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchData: FetchData = useCallback(async () => {
    console.log('[fetchData] Fetching data...');
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      console.log('[fetchData] Data fetched:', result.title);
      setData('fetched');
    } catch (error) {
      console.error('[fetchData] Fetch error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!observerRef.current || hasFetched) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          console.log('[IntersectionObserver] Spinner is in view, starting fetch...');
          fetchData();
          setHasFetched(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchData, hasFetched]);

  return (
    <div>
      <div ref={observerRef}>
        {loading || !data ? <LoadingSpinner /> : <h1 className="output">Data fetched.</h1>}
      </div>
    </div>
  );
}

export default ComplexExample;
`}
        </code>
      </pre>

      <h4>Output:</h4>
      <div ref={observerRef}>
        {loading || !data ? <LoadingSpinner /> : <h1 className="output">Data fetched.</h1>}
      </div>

      <h1 className="output">
        You can use the browser’s developer tools (Inspect) to view console messages for this example.
      </h1>
    </div>
  );
}

export default ComplexExample;