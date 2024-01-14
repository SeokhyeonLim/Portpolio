import React from "react";
import './CSS/Aboutme.css';

function Aboutme(){
    return(
        <div className="aboutme_container">
        <div className="aboutme">

            <div className="ABOUTME-HEAD">
                <h1>LINK ABOUT ME</h1>
            </div>

            <div className="item-container">
                <div className="imgclass-me">
                    <img className="aboutme" src="me.png" alt="My profile picture" />
                </div>
                <div className="name">
                    <div className="name-position1"> 이름 </div>
                    <div className="name-position2">임석현</div>
                </div>
            </div>

            <div className="item-container">
                <div className="imgclass-me">
                    <img className="aboutme" src="call.png" alt="Phone icon"/>
                </div>
                <div className="name">
                    <div className="name-position1"> 전화번호 </div>
                    <div className="name-position2">010-3921-2858</div>
                </div>
            </div>

            <div className="item-container">
                <div className="imgclass-me">
                    <img className="aboutme" src="birthday.png" alt="Birthday cake icon"/>
                </div>
                <div className="name">
                    <div className="name-position1"> 생년월일 </div>
                    <div className="name-position2"> 1999년 10월 3일 </div>
                </div>
            </div>

            <div className="item-container">
                <div className="imgclass-me">
                    <img className="aboutme" src="home.png" alt="Home icon"/>
                </div>
                <div className="name">
                    <div className="name-position1"> 주소지 </div>
                    <div className="name-position2"> 경기도 평택시 팽성송화로 154 </div>
                </div>
            </div>

            <div className="item-container">
                <div className="imgclass-me">
                    <img className="aboutme" src="email.png" alt="Email icon"/>
                </div>
                <div className="name">
                    <div className="name-position1"> 이메일 </div>
                    <div className="name-position2"> naya1003a@naver.com </div>
                </div>
            </div>

            <div className="item-container">
                <div className="imgclass-me">
                    <img className="aboutme" src="grade.png" alt="Graduation cap icon"/>
                </div>
                <div className="name">
                    <div className="name-position1"> 학력 </div>
                    <div className="name-position2"> 영남이공대학교 졸업 </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Aboutme;