type MyProps = { content: string; link: string }
import React, { useState, useEffect } from 'react';

// Any component in your codebase
function FetchData(props: MyProps) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
}, []);

  return (
    <div>
        {data ? (
            data.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))
        ) : (
            <p>Loading...</p>
        )}
    </div>
  );
}

export default FetchData;
