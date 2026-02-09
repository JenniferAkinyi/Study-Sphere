import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../backend/firebase";
import Avatar from "../Authentication/Avatar";

const PostView = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = doc(db, "posts", postId);

    const unsubscribe = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setPost({ id: snap.id, ...snap.data() });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [postId]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center mb-3">
        <Avatar
          username={post?.username}
          profileImage={post?.userImage}
          size={40}
        />
        <div className="ml-3">
          <h3 className="font-semibold text-gray-800">
            {post?.username}
          </h3>
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
    </div>
  );
};

export default PostView;
