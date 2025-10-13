import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import postsData from '../../../data/posts.json'

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  if (posts.length === 0) {
    return <p className="text-center text-gray-500">No post data available</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen py-6 bg-gray-50">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
