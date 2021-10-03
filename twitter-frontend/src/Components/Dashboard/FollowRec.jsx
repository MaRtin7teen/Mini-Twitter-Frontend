import axios from 'axios';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`

    & > .followRec {
        background-color: #292929;
        border-radius: 20px;
        margin: 5%;

        & > .head, .users {
            display: flex;
            justify-content: space-between;
        }

        & > .head {
            padding: 3% 7%;
            font-weight: 600;
            font-size: 1.3em;
        }

        & > .users {
            display: flex;
            flex-direction: column;

            & > .user {
                padding: 3% 7%;
                display: flex;
                justify-content: space-between;
                border-top: 0.1px solid gray;
                border-bottom: 0.1px solid gray;

                & > .userInfo {

                    & > .name {
                        font-weight: 600;
                    }

                    & > .username {
                        font-size: 0.9em;
                        color: gray;
                    }
                }

                & > .followBtn {
                    width: 100%;
                    text-align: right;
                    
                    & > .follow {
                        border: none;
                        outline: none;
                        background-color: #00b7ff;
                        color: white;
                        border-radius: 25px;
                        padding: 3% 7%;
                        font-size: 1em;
                        cursor: pointer;

                        :hover {
                            filter: contrast(70%);
                        }
                    }

                    & > .unfollow {
                        border: none;
                        outline: none;
                        background-color: transparent;
                        color: white;
                        border-radius: 25px;
                        padding: 3% 7%;
                        font-size: 1em;
                        cursor: pointer;

                        :hover {
                            filter: contrast(70%);
                            color: #00b7ff;
                        }
                    }

                    & > .tweets {
                        border: none;
                        outline: none;
                        background-color: #00b7ff;
                        color: white;
                        border-radius: 25px;
                        padding: 3% 7%;
                        font-size: 1em;
                        cursor: pointer;

                        :hover {
                            filter: contrast(70%);
                        }
                    }
                }
            }
        }

        & > .moreUsers {
            padding: 3% 7%;
            font-weight: 600;
            font-size: 1em;
            cursor: pointer;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;

            :hover {
                background-color: #444444;
                color: #00b7ff;
            }
        }
    }
`;

const FollowRec = () => {
    const [rec, setRec] = React.useState([]);
    const [foll, setFoll] = React.useState([]);

    const getRecList = () => {
        axios.get(`http://localhost:5000/users`)
            .then (result => {
                // console.log(result.data);
                // console.log(result.data[0].follower)
                setRec(result.data);
                setFoll(result.data[0].following);
            })
            .catch (error => {
                console.log(error.message);
            })
    }

    const handleUnfollow = (userInfo, username) => {
        const payload = {
                following: foll.filter(ele => ele !== username)
            }
        
        axios.patch(`http://localhost:5000/users/1`, payload)
            .then (result => {
                console.log(result);
            })
            .catch (error => {
                console.log(error.message);
            })

        getRecList();
    }

    const handleFollow = (userInfo, username) => {
        const payload = {
            following: [...foll, username]
        }

        axios.patch(`http://localhost:5000/users/1`, payload)
            .then (result => {
                console.log(result);
            })
            .catch (error => {
                console.log(error.message);
            })

        getRecList();
    }

    React.useEffect(() => {
        getRecList();
    }, []);

    return (
        <Container>
            
            <div className="followRec">

                {/* Head */}
                <div className="head">
                    <div className="title">Who to follow</div>
                </div>

                {/* Users container */}
                <div className="users">

                    {/* Mapping recommendations list */}
                    {
                        rec.filter(ele => "John1224" !== ele.username).map(ele => (
                            
                            <div className="user" key={ele.username}>
                                
                                {/* User info */}
                                <div className="userInfo">

                                    {/* Name */}
                                    <div className="name">
                                        {ele.name}
                                    </div>

                                    {/* Username */}
                                    <div className="username">
                                        @{ele.username}
                                    </div>

                                </div>

                                <div className="followBtn">

                                    {/* Filtering follow reccomendations */}
                                    {
                                        foll.filter(follower => follower === ele.username).length ?

                                        <>

                                            {/* Show Tweets */}
                                            <button className="tweets">Tweets</button>

                                            {/* Unfollow button */}
                                            <button className="unfollow" onClick={() => handleUnfollow(ele, ele.username)}>Unfollow</button>

                                        </> :

                                        // Follow Button
                                        <button className="follow" onClick={() => handleFollow(ele, ele.username)}>Follow</button>
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
                
                {/* Show more button */}
                <div className="moreUsers">
                    Show more
                </div>

            </div> 

        </Container>
    )
}

export default FollowRec;