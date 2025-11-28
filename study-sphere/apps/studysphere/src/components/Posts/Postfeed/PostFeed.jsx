import React from 'react';
import PostCard from './PostCard';
import postsData from '../../../data/posts.json';

const PostFeed = () => {
  return (
    <div className="flex-col items-center">
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
