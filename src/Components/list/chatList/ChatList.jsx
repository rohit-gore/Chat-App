import { useState } from "react";
import "./chatlist.css";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="ChatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>

                <img
                    src={addMode ? "./minus.png" : "./plus.png"}
                    alt=""
                    className="add"
                    onClick={() => setAddMode(prev => !prev)}
                />
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <span>Jane doe</span>
                    <p>Hello!</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <span>Jane doe</span>
                    <p>Hello!</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="text">
                    <span>Jane doe</span>
                    <p>Hello!</p>
                </div>
            </div>
            
        </div>
    );
};

export default ChatList;
