import React, { useCallback, useState } from 'react';
import { Card, Button, Popover, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PostImages from './PostImages';
import CommentForm from './CommentForm';


const PostCard = ({ post }) => {
    // const { me } = useSelector((state)=>state.user);
    // const id = me && me.id; 
    // ===>
    // const id = me?.id; 

    // ===>
    const id = useSelector((state)=>state.user.me?.id);

    // 보호연산자
    // Optional chaining
    // 내가 만약 로그인을 한 상태이면서(+) ID값이 있는지 체크 
    // me 그리고 me.id가 있을 것

    // 댓글,좋아요 눌럿을때 토글기능
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev)       
    },[]);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev)       
    },[]);
    return (
        <div style={{marginBottom: 20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked 
                    ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            
                            {id && post.User.id === id ? (
                            // 로그인한 사용자 아이디(id)와 게시글의 아이디(post.User.id)가
                            // 같으면(내가쓴글이면) 수정 삭제가 가능하고
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger">삭제</Button>
                                </>
                            ) : <Button>신고</Button>
                            // 내가 쓴 글이 아니면 남에글을 신고할수 있는 버튼이 보인다.
                        }
                            
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                // 배열 안에 jsx는 key가 필요!
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post} />
                    {/* 게시글의 아이디가 필요해서 id정보를 prop로 넘긴다 */}
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout='horizontal'
                        dataSource={post.Comments}
                        renderItem={(item)=>(
                            <li>
                                <Comment 
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}

        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;