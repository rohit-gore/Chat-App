import "./detail.css"

const Detail = () => {
    return(
        <div className="detail">

            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
            <div className="info">

                {/* Option 1 */}
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                {/* Option 2 */}
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                {/* Option 3 */}
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    
                    <div className="photos">
                        {/* Photo Items 1 */}
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715472000&semt=sph" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        {/* Photo Items 2 */}
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715472000&semt=sph" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        {/* Photo Items 3 */}
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715472000&semt=sph" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        {/* Photo Items 4 */}
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715472000&semt=sph" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>

                {/* Option 4 */}
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <button>Block User</button>

            </div>
        </div>
    )
}

export default Detail