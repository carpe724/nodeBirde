
import React, { useCallback, useState, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths } = useSelector((state)=> state.post);

    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value)
    });

    const dispatch = useDispatch()
    const onSubmit = useCallback(() => {
        dispatch(addPost);
        setText('');
    }, []);

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click()
    }, [imageInput.current])

    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit} >
            <Input.TextArea 
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="글을 입력해보세요~!"
            /> 
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v)=>{
                    return(
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={v} style={{ width: '200px' }}  alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
                {/* 업로드된 이미지 미리보기 */}
            </div>
        </Form>
    )
}

export default PostForm;