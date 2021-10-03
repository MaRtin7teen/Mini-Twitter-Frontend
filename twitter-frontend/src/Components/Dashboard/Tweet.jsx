import React from 'react';
import styled from "styled-components";
import { BiUser } from 'react-icons/bi';
import { AiOutlineGif, AiOutlineCalendar } from 'react-icons/ai';
import { IoImageOutline } from "react-icons/io5";
import { CgPoll } from "react-icons/cg";
import { BiSmile } from "react-icons/bi";
// import io from "socket.io-client";
import axios from "axios";

const Container = styled.div`
    border-bottom: 0.1px solid gray;
    padding: 3%;
    display: grid;
    grid-template-columns: 50px auto;

    & > .avatar {
        display: flex;
        justify-content: center;
        
        & > .icon {
            font-size: 2em;
            border-radius: 50%;
            padding: 5%;
            background-color: gray;
        }
    }

    & > .tweetCont {

        & > .tweet {
            border: none;
            outline: none;
            resize: vertical;
            background-color: transparent;
            font-family: sans-serif;
            font-size: 1em;
            color: white;
            width: 100%;
            padding: 1%;
            overflow: hidden;
            border-bottom: 1px solid gray;
            
            :focus {
                border-bottom: 1px solid #00b7ff;
            }
        }

        & > .count {
            font-size: 0.8em;
            text-align: right;
            color: #8d8d8d;
        }

        & > .orange {
            color: orange;
        }

        & > .red {
            color: red;
        }

        & > .tweetOptions {
            padding: 1%;
            display: grid;
            grid-template-columns: 40% auto;
            align-items: center;

            & > .tweetMedia {
                display: flex;
                justify-content: start;

                & > .icon {
                    color: #00b7ff;
                    font-size: 25px;
                    height: 25px;
                    padding: 3%;
                    cursor: pointer;

                    :hover {
                        background-color: #1f1f1f;
                        border-radius: 50%;
                    }
                }
            }

            & > .tweetSendBtn {
                text-align: right;

                & > button {
                    width: fit-content;
                    padding: 3% 10%;
                    font-size: 1.1em;
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
    }
`;


const Tweet = () => {

    // const socket = io("http://localhost:5000");

    const tweetLimit = 140;
    const [tweet, setTweet] = React.useState("");
    const [count, setCount] = React.useState(tweetLimit);

    const [rows, setRows] = React.useState(1);

    // Tweet text value gets saved to variable "tweet"
    const tweetChange = (value) => {

        /**
         * Checks if the current textarea value's length is less than or equal to 140(tweet limit)
         * If true then it saves the value to the variable "tweet" and decrements "count"
         */
        if (value.length <= tweetLimit) {
            setTweet(value);
            setCount(tweetLimit - value.length);
        }

        checkTextarea(value);
    }

    // Retains the size of textarea back to 0 when there is no text in it
    const checkTextarea = (value) => {
        if (value.length === 0) {
            setRows(1);
        }
    }

    // Grows the textarea row by 1 whenever the "Enter" key is pressed 
    const growTextarea = (event) => {
        if (event.key === "Enter") {
            setRows(rows + 1);
        }
    }
    
    const postTweet = () => {

        if (tweet.trim().length === 0) {
            return;
        }

        axios.post(``)
            .then (result => {
                console.log(result);
            })
            .catch (error => {
                console.log(error);
            })

        // socket.on(
        //     "new-posts", (posts) => {
            //   if (id.current !== editorId) {
            //     remote.current = true;
            //     JSON.parse(ops).forEach((op: any) =>
            //       editor.current!.applyOperation(op)
            //     );
            //     remote.current = false;
            //   }
        //     }
        // );
    }

    return (
        <Container>

            <div className="avatar">
                <BiUser className="icon" />
            </div>

            <div className="tweetCont">

                {/* Tweet text */}
                <textarea rows={rows} className="tweet" placeholder="What's happening?" value={tweet} onChange={e => tweetChange(e.target.value)} onKeyPress={e => growTextarea(e)} autoFocus />

                {/* Counter shows remaining count of characters in the tweet */}
                <div className={count > 20 ? "count" : count > 5 ? "count orange" : "count red"}>
                    {count} characters left
                </div>

                {/* Static tweet options */}
                <div className="tweetOptions">

                    <div className="tweetMedia">
                        <IoImageOutline className="icon" />
                        <AiOutlineGif className="icon border" />
                        <CgPoll className="icon" />
                        <BiSmile className="icon" />
                        <AiOutlineCalendar className="icon" />
                    </div>

                    {/* Sends the tweet */}
                    <div className="tweetSendBtn">
                        <button onClick={postTweet}>Tweet</button>
                    </div>
                    
                </div>

            </div>

        </Container>
    )
}

export default Tweet;