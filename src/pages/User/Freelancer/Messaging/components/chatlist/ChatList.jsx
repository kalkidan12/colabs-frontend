import React, { useContext } from "react";
import "./chatlist.css";
import ChatListItems from "./ChatListItems";
import SocketContext from "../../../../../../context/messaging/SocketContext";
import { getReceiverId } from "../chatbody/ChatBody";

const ChatList = () => {
  const { messages, onlineUsers } = useContext(SocketContext);
  
  return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Messages</h2>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Message ..." required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {messages.map((item, index) => {
            let isOnline = "";
            onlineUsers.forEach(users => {
              if(users.userId === item.senderId){ 
                isOnline = "active"
              }
            });

            return (
              <ChatListItems
                name={getReceiverId(messages, index)}
                key={index}
                chatIndex={index}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={isOnline}
                lastOnline={new Date(item.updatedAt).toLocaleDateString()}
                lastMessage={item.totalMessages[item.totalMessages.length - 1].message}
                //image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ChatList;