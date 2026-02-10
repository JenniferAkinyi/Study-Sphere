import React, { useEffect, useState } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../../backend/firebase";
import Avatar from "../Authentication/Avatar";
import CommentModal from "../Comment/CommentModal";
import { useUser } from "../../context/userContext";
import useCommentCount from "../../hooks/useCommentCount";
import { FaRegComment, FaShare, FaHeart } from "react-icons/fa";
import CommentComposer from "../Comment/CommentComposer";
import Sidebar from "../Sidebar/Sidebar";

const PostView = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userData, user } = useUser();
  const [likes, setLikes] = useState([]);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const userLiked = likes.includes(userData?.uid);
  const commentCount = useCommentCount(postId);
  const openCommentModal = () => setIsCommentModalOpen(true);
  const closeCommentModal = () => setIsCommentModalOpen(false);
  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num || 0);
  };

  useEffect(() => {
    const ref = doc(db, "posts", postId);

    const unsubscribe = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setPost({ id: snap.id, ...snap.data() });
        setLikes(Array.isArray(data.likes) ? data.likes : []);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [postId]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found</p>;

  const handleLike = async () => {
    if (!userData?.uid)
      return console.log("userData or uid missing, cannot like post");

    let updatedLikes = userLiked
      ? likes.filter((id) => id !== userData.uid)
      : [...likes, userData.uid];

    try {
      await updateDoc(doc(db, "posts", post.id), { likes: updatedLikes });
      setLikes(updatedLikes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddComment = async (commentText) => {
    if (!user || !user.uid || !userData) {
      console.error("No user data cannot post comment");
      return;
    }

    try {
      await addDoc(collection(db, "posts", post.id, "comments"), {
        text: commentText,
        uid: user.uid,
        username: userData.username,
        profileImage: userData.profileImage || "",
        createdAt: serverTimestamp(),
        parentId: null,
      });
      
      closeCommentModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
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
              ? new Date(post.createdAt.seconds * 1000).toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                  },
                ) +
                " at " +
                new Date(post.createdAt.seconds * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "Just now"}
          </p>
        </div>
      </div>
      <p className="mb-3 text-gray-700">{post?.content}</p>

      {post?.image && (
        <img
          src={post.image}
          alt="post"
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
      <div className="flex items-center mb-3 text-sm text-gray-500 gap-4">
        <button
          className="flex items-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            handleLike();
          }}
        >
          <FaHeart className={userLiked ? "text-red-500" : "text-gray-500"} />
          <span>{likes.length}</span>
        </button>

        <button
          className="flex items-center gap-2 hover:text-indigo-600"
          onClick={(e) => {
            e.stopPropagation();
            openCommentModal();
          }}
        >
          <FaRegComment />
          <span>{commentCount}</span>
        </button>

        <button className="flex items-center gap-2 hover:text-indigo-600">
          <FaShare />
          <span>{post?.shares || 0}</span>
        </button>
      </div>
      {isCommentModalOpen && (
        <CommentModal
          post={post}
          userData={userData}
          onClose={closeCommentModal}
          onSubmit={handleAddComment}
        />
      )}
      <hr className="mt-4 mb-4 border-gray-200" />
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
        <span className="font-medium text-gray-700">
          {formatNumber(likes.length)} likes
        </span>
        <span>.</span>
        <span className="font-medium text-gray-700">
          {formatNumber(commentCount)} comments
        </span>
        <span>.</span>
        <span className="font-medium text-gray-700">
          {formatNumber(post?.shares || 0)} shares
        </span>
      </div>
      <hr className="mt-4 mb-4 border-gray-200" />
      <CommentComposer
        post={post}
        onSubmit={handleAddComment}
      />
    </div>
  );
};

export default PostView;
