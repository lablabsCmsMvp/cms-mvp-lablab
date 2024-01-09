import React, { useState, useEffect } from 'react';

type post = {
    id: number;
    title: string;
    body: string;
};

type MyProps = { content: string; link: string };

// Any component in your codebase
function FetchData(props: MyProps) {
    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {data.length > 0 ? (
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