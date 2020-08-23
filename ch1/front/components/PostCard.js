import React, {useState,useCallback} from 'react'
import {Card,Button,Avatar, List, Comment} from 'antd'
import Link from 'next/link'
import Icon from '@ant-design/icons'
import propTypes from 'prop-types'
import {useSelector, useDispatch} from 'react-redux'
import Form from 'antd/lib/form/Form'
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST } from '../reducers/post'

const PostCard = ({post}) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const {me} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
        if(!commentFormOpened){
            dispatch({
                type: LOAD_COMMENTS_REQUEST,
                data: post.id,
            });
        }
    },[]);

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        if(!me){
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data:{
                postId : post.id,
                content: commentText,
            }
        });
    },[me && me.id, commentText]);

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    },[]);

    return(
        <div>
            <Card
                key={+post.createdAt}
                cover={post.img && <img src={post.img} alt="example"/>}
                actions={[
                    <Icon type="retweet" key="retweet"/>,
                    <Icon type="heart" key="heart"/>,
                    <Icon type="message" key="message" onClick={onToggleComment}/>,
                    <Icon type="ellipsis" key="ellipsis"/>
                ]}
                extra={<Button>팔로우</Button>}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<div>{post.content.split(/(#[^\s]+)/g).map((v)=>{
                        if(v.match(/#[^\s]+/)){
                            return(
                                <Link href="/hashtag" key={v}><a>{v}</a></Link>
                            );
                        }
                        return v;
                    })}</div>}
                />
            </Card>
                {commentFormOpened && (
                    <>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={(item) => (
                        <li>
                            <Comment
                                author={item.User.nickname}
                                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                content={item.content}
                            />
                        </li>
                        )}
                    />
                    </>
                )}
        </div>
    );
};

PostCard.propTypes = {
    post : propTypes.shape({
        User : propTypes.object,
        content : propTypes.string,
        img : propTypes.string,
        createdAt : propTypes.object,
    }),
}

export default PostCard;