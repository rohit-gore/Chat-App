import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useState } from "react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = e =>{
        setText(prev => prev+e.emoji);
        setOpen(false);
    }

    return(
        <div className="chat">
            {/* This is the top section of the chat. */}
            <div className="top">

                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem, ipsum dolor sit amet.</p>
                    </div>
                </div>


                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>

            </div>

            {/* This is the middle section of the Chat, where all the chats are visible. */}
            <div className="center">
                
                {/* Message 1 */}
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                {/* Message 2 */}
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                {/* Message 3 */}
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                {/* Message 4 */}
                <div className="message own">
                    <div className="texts">
                        <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715472000&semt=sph" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

            </div>

            {/* This is the bottom section of Chat, where all the inputs are available. */}
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." value={text} onChange={e => setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)}/>
                    <div className="picker">
                    <EmojiPicker open = {open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>

        </div>
    )
}

export default Chat