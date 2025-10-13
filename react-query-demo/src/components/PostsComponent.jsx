import React from "react";
import { useQuery } from "react-query";

// Fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  // useQuery with advanced configuration
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 30000, // 30 seconds before data becomes stale
    cacheTime: 60000, // 1 minute before cached data is garbage collected
    refetchOnWindowFocus: true, // refetch when window regains focus
    keepPreviousData: true, // keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={refetch} style={{ marginBottom: "15px" }}>
        🔄 Refetch Posts
      </button>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
