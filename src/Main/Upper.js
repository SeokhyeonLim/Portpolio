import React from "react";
import { Link } from "react-router-dom";
import './CSS/Upper.css';

function Upper() {
    return (
        <div className="Root">
            <div className="Header">
                <div className="Header-Nav">
                    <h1>Lim's Portfolio</h1>
                    {/* Use Link to navigate to "/aboutme" */}
                    <Link to="/aboutme" className="Header-move">About me</Link>
                    {/* You can add similar links for other pages */}
                    <div className="Header-move">Skill</div>
                    <div className="Header-move">Archive</div>
                    <div className="Header-move">Project</div>
                </div>

                <div className="Header-Container">
                    <div className="Upper-css1">
                        <h2>=임석현=</h2>
                        <div className="upper-css2">
                            저는 풀스택 웹 개발자가 되고 싶은 학생입니다.<br/>
                            꼼꼼하고 성실하며 새로운 것을 배우는 것에 대한 편견이 없는 학생입니다.
                        </div>
                    </div>

                    {/* Use Link to navigate to "/aboutme" */}
                    <Link to="/aboutme" className="move-nextpage">다음 페이지로</Link>
                </div>
            </div>
        </div>
    );
}

export default Upper;
