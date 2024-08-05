import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";

const CommentsContainer = () => {
  const commentData = [
    {
      name: "Harry Joebid",
      text: "This is the dummy text comment by user.",
      replies: [
        {
          name: "Harry Joebid",
          text: "This is the dummy text comment by user.",
          replies: [],
        },
        {
          name: "Harry Joebid",
          text: "This is the dummy text comment by user.",
          replies: [
            {
              name: "Harry Joebid",
              text: "This is the dummy text comment by user.",
              replies: [
                {
                  name: "Harry Joebid",
                  text: "This is the dummy text comment by user.",
                  replies: [
                    {
                      name: "Harry Joebid",
                      text: "This is the dummy text comment by user.",
                      replies: [],
                    },
                  ],
                },
                {
                  name: "Harry Joebid",
                  text: "This is the dummy text comment by user.",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Harry Joebid",
      text: "This is the dummy text comment by user.",
      replies: [],
    },
    {
      name: "Harry Joebid",
      text: "This is the dummy text comment by user.",
      replies: [],
    },
    {
      name: "Harry Joebid",
      text: "This is the dummy text comment by user.",
      replies: [],
    },
    {
      name: "Harry Joebid",
      text: "This is the dummy text comment by user.",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
      <div className="flex p-2 shadow-sm bg-gray-100 rounded-lg my-2">
        <img
          className="w-12 h-12"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
          <div className="flex">
            <GrLike className="mx-2 my-2" />
            <GrDislike className="mx-2 my-2" />
          </div>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 ml-5 border border-l-black">
          {/*  A recursive function is a function that calls itself somewhere within the body of the function */}
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className="mx-2 pb-2 pl-2">
      <h1 className="text-2xl font-bold mb-2">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
