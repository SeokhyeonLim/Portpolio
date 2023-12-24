import React from "react";
import './CSS/Upper.css';

function Upper() {
    return (
        <div className="Root">
            <div className="Header">
                <div className="Header-Nav">
                    <h1>Lim's Portfolio</h1>
                    <div className="Header-move1">About me</div>
                    <div className="Header-move2">Skill</div>
                    <div className="Header-move3">Archive</div>
                    <div className="Header-move4">Project</div>
                </div>

                <div className="Header-Container">
                    <div className="Upper-css1">
                        <h2>=임석현=</h2>
                        <div className="upper-css2">
                            저는 풀스택 웹 개발자가 되고 싶은 학생입니다.<br/>
                            꼼꼼하고 성실하며 새로운 것을 배우는 것에 대한 편견이 없는 학생입니다.
                        </div>
                    </div>
                    
                    <div className="move-nextpage">
                        다음 페이지로
                    </div>
                </div>
            </div>

            <div className="aboutme_container">
                <div className="aboutme">
                    <div className="ABOUTME-HEAD">
                        <h1>LINK ABOUT ME</h1>
                    </div>

                    <div className="imgclass-me">
                        <img className="aboutme" src="me.png" alt="My profile picture"/>&nbsp;
                    </div>

                    <div className="name">
                        이름 <br />
                        임석현
                    </div>

                    <div className="imgclass-me">
                        <img className="aboutme" src="call.png" alt="Phone icon"/>
                    </div>
                    <div className="phone">
                    전화번호 <br/>
                    010-3921-2858
                    </div>

                    <div className="imgclass-me">
                        <img className="aboutme" src="birthday.png" alt="Birthday cake icon"/>
                    </div>
                    생년월일 <br/>
                    1999년 10월 3일

                    <div className="imgclass-me">
                        <img className="aboutme" src="home.png" alt="Home icon"/>
                    </div>
                    주소지 <br/>
                    경기도 평택시 팽성읍 팽성송화로

                    <div className="imgclass-me">
                        <img className="aboutme" src="email.png" alt="Email icon"/>
                    </div>
                    이메일 <br/>
                    naya1003a@naver.com

                    <div className="imgclass-me">
                        <img className="aboutme" src="grade.png" alt="Graduation cap icon"/>
                    </div>
                    학력 <br/>
                    영남이공대학교(소프트웨어 컨텐츠)
                </div>
            </div>
        </div>
    );
}

export default Upper;
