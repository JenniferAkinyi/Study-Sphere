import React from "react";
import { FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";
import Avatar from "../../Authentication/Avatar";

const PostCard = ({ post }) => {
  if (!post) {
    return (
      <div className="w-[60%] text-center text-gray-500 py-4 mx-auto">
        No post data available for you to see.
      </div>
    );
  }
  return (
    <div className="w-[60%] mx-auto bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200 mt-4">
      <div className="flex items-center mb-3">
        <Avatar 
          username={post?.username}
          profileImage={post?.userImage}
          size={40}
        />
        <div className="ml-3">
          <h3 className="font-semibold text-gray-800">{post?.username}</h3>
          <p className="text-sm text-gray-500">{post?.timeAgo}</p>
        </div>
      </div>

      {/* Post content */}
      <p className="mb-3 text-gray-700">{post?.content}</p>

      {post?.image && (
        <img
          src={post.image}
          alt="Post"
          className="object-cover w-full mb-3 rounded-lg max-h-96"
        />
      )}
      {post?.link && (
        <a href={post.link} target="_blank" className="text-indigo-600 underline">
          {post.link}
        </a>
      )}
      <hr className="mt-4 mb-4 border-gray-200"/>

      {/* Interaction buttons */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <button className="flex items-center gap-2 transition hover:text-indigo-600">
          <FaRegHeart />
          <span>{post?.likes ?? 0}</span>
        </button>

        <button className="flex items-center gap-2 transition hover:text-indigo-600">
          <FaRegComment />
          <span>{post?.comments?.length ?? 0}</span>
        </button>

        <button className="flex items-center gap-2 transition hover:text-indigo-600">
          <FaShare />
          <span>{post?.shares ?? 0}</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
