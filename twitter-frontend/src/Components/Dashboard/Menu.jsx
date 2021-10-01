import React from 'react';
import styled from "styled-components";
// import { TwitterOutlined, HomeOutlined } from "@ant-design/icons";
import { FaTwitter } from "react-icons/fa";
import { GiBirdHouse } from "react-icons/gi";
import { BiHash, BiBell, BiBookmark, BiUser } from "react-icons/bi";
import { HiOutlineMail, HiOutlineDotsHorizontal } from "react-icons/hi";
import { CgNotes, CgMoreO } from "react-icons/cg";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    border-right: 0.1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > .logo, .menuItems, .profileCard {
        width: 80%;
        margin: auto;
    }

    & > .logo > .icon {
        font-size: 2.5em;
        padding: 0 7%;

        :hover {
            color: #00b7ff;
            cursor: pointer;
        }
    }

    & > .menuItems {

        & > .item {
            display: flex;
            align-items: center;
            width: fit-content;
            padding: 3% 7%;
            margin: 3% 0;
            
            & > .icon {
                font-size: 1.5em;
            }

            & > .title {
                font-size: 1.3em;
                font-weight: 600;
            }

            :hover {
                background-color: #303030;
                border-radius: 25px;
                color: white;
                cursor: pointer;
            }
        }

        & > .tweetBtn {
            padding: 3%;
            
            & > button {
                width: 100%;
                padding: 7%;
                font-size: 1.3em;
                font-weight: 600;
                border-radius: 25px;
                border: none;
                outline: none;
                background-color: #00b7ff;
                color: white;

                :hover {
                    cursor: pointer;
                    filter: contrast(70%);
                }
            }
        }
    }

    & > .profileCard {
        border-radius: 30px;
        padding: 3% 5%;
        background-color: #1b1b1b;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        & > .avatar > .avatarIcon {
            background-color: gray;
            padding: 10px;
            border-radius: 50%;
            font-size: 1.3em;
        }

        & > .dots > .dotIcon {
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5em;

            :hover {
                background-color: #707070;
            }
        }
    }
`;

const Menu = () => {

    const history = useHistory();

    const toDashboard = () => {
        history.push("/");
    }

    return (
        <Container>

            <div className="logo">
                <FaTwitter onClick={toDashboard} className="icon" />
            </div>
            
            <div className="menuItems">

                <div className="item">
                    <GiBirdHouse className="icon" />
                    &nbsp;&nbsp;
                    <div className="title">Home</div>
                </div>

                <div className="item">
                    <BiHash className="icon" />
                    &nbsp;&nbsp;
                    <div className="title">Explore</div>
                </div>

                <div className="item">
                    <BiBell className="icon" />
                    &nbsp;&nbsp;
                    <div className="title">Notifications</div>
                </div>

                <div className="item">
                    <HiOutlineMail className="icon" />
                    &nbsp;&nbsp;
                    <div className="title">Messages</div>
                </div>

                <div className="item">
                    <BiBookmark className="icon" />
                    &nbsp;&nbsp;
                    <div className="title">Bookmarks</div>
                </div>

                <div className="item">
                    <CgNotes className="icon" />
                    &nbsp;&nbsp;
                    <div className="title">Lists</div>
                </div>

                <div className="item">
                    <BiUser className="icon" />
                    &nbsp;&nbsp;
                    <div className="title">Profile</div>
                </div>

                <div className="item">
                    <CgMoreO className="icon" />
                    &nbsp;&nbsp;
                    <div className="title">More</div>
                </div>

                <div className="tweetBtn">
                    <button>Tweet</button>
                </div>

            </div>

            <div className="profileCard">
                <div className="avatar">
                    <BiUser className="avatarIcon" />
                </div>

                <div className="username">
                    <div>Martin</div>
                    <div>@Martin7teen</div>
                </div>

                <div className="dots">
                    <HiOutlineDotsHorizontal className="dotIcon" />
                </div>
            </div>

        </Container>
    )
}

export default Menu;