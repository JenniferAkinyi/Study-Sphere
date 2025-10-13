import React from "react";
import { FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";

const PostCard = ({ post }) => {
  if (!post) {
    return (
      <div className="w-[60%] text-center text-gray-500 py-4 mx-auto">
        No post data available.
      </div>
    );
  }

  return (
    <div className="w-[60%] mx-auto bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200">
      {/* User info */}
      <div className="flex items-center mb-3">
        <img
          src={post?.userImage}
          alt={post?.username || "User"}
          className="object-cover w-10 h-10 mr-3 rounded-full"
        />
        <div>
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

      {/* Interaction buttons */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <button className="flex items-center gap-2 transition hover:text-indigo-600">
          <FaRegHeart /> <span>{post?.likes ?? 0}</span>
        </button>

        <button className="flex items-center gap-2 transition hover:text-indigo-600">
          <FaRegComment /> <span>{post?.comments?.length ?? 0}</span>
        </button>

        <button className="flex items-center gap-2 transition hover:text-indigo-600">
          <FaShare /> <span>{post?.shares ?? 0}</span>
        </button>
      </div>

      {/* Horizontal line after each post */}
      <hr className="mt-4 border-gray-200" />
    </div>
  );
};

export default PostCard;
