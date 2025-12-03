import React, { useState, useEffect } from "react";
import { FaRegComment, FaShare, FaHeart } from "react-icons/fa";
import Avatar from "../../Authentication/Avatar";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../backend/firebase";
import { useUser } from "../../../context/userContext";

const PostCard = ({ post }) => {
  const { userData } = useUser();
  const normalizeLikes = (likes) => {
    if (Array.isArray(likes)) return likes;
    if (typeof likes === "number") return Array(likes).fill("placeholder"); 
    return [];
  };
  const [likes, setLikes] = useState(normalizeLikes(post.likes));
  useEffect(() => {
    setLikes(normalizeLikes(post.likes));
  }, [post.likes]);

  const userLiked = likes.includes(userData?.uid);

  const handleLike = async () => {
    if (!userData?.uid) {
      return;
    }
    const userLiked = likes.includes(userData.uid);
    const updatedLikes = userLiked
      ? likes.filter((id) => id !== userData.uid)
      : [...likes, userData.uid];
    try {
      await updateDoc(doc(db, "posts", post.id), { likes: updatedLikes });
      setLikes(updatedLikes);
    } catch (error) {
    }
  };
  const likeCount = likes.length;
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
          <p className="text-sm text-gray-500">
            {post.createdAt?.seconds
              ? new Date(post.createdAt.seconds * 1000).toLocaleString()
              : "Just Now"}
          </p>
        </div>
      </div>

      <p className="mb-3 text-gray-700">{post?.content}</p>

      {post?.image && (
        <img
          src={post.image}
          alt="Post"
          className="object-cover w-full mb-3 rounded-lg max-h-96"
        />
      )}

      {post?.link && (
        <a
          href={post.link}
          target="_blank"
          className="text-indigo-600 underline"
        >
          {post.link}
        </a>
      )}
      <hr className="mt-4 mb-4 border-gray-200" />
      <div className="flex items-center justify-between text-sm text-gray-500">
        <button className="flex items-center gap-2" onClick={handleLike}>
          <FaHeart className={userLiked ? "text-red-500" : "text-gray-500"} />
          <span>{likeCount}</span>
        </button>

        <button className="flex items-center gap-2 hover:text-indigo-600">
          <FaRegComment />
          <span>{post?.comments?.length || 0}</span>
        </button>

        <button className="flex items-center gap-2 hover:text-indigo-600">
          <FaShare />
          <span>{post?.shares || 0}</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
