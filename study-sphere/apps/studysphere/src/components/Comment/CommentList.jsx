import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../../backend/firebase";
import Avatar from "../Authentication/Avatar";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = collection(db, "posts", postId, "comments");
    const q = query(ref, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = [];
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });

      setComments(list);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [postId]);

  if (loading) return <p>Loading comments...</p>;

  return (
    <div className="space-y-4">
      {comments.length === 0 && (
        <p className="text-gray-500">No comments yet</p>
      )}

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="p-3 bg-white border rounded-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <Avatar
              username={comment.username}
              profileImage={comment.profileImage}
              size={32}
            />

            <span className="font-medium">
              {comment.username}
            </span>
          </div>

          <p className="ml-10 text-gray-700">
            {comment.text}
          </p>

          <p className="mt-1 ml-10 text-xs text-gray-400">
            {comment.createdAt?.seconds
              ? new Date(
                  comment.createdAt.seconds * 1000
                ).toLocaleString()
              : "Just now"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
