import { format } from "timeago.js";
import "./message.css";

export default function Message({ message, own, currentUser, friend }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src={
            own
              ? currentUser?.profilePicture
                ? PF + currentUser.profilePicture
                : `${PF}person/noAvatar.png`
              : friend?.profilePicture
              ? PF + friend.profilePicture
              : `${PF}person/noAvatar.png`
          }
          alt=""
          className="messageImg"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)} </div>
    </div>
  );
}
