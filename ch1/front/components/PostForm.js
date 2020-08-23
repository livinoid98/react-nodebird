import React, {useCallback, useState, useEffect} from 'react'
import {Form, Button, Input} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = ({post}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const {imagePaths, isAddingPost, postAdded} = useSelector(state => state.post);

    useEffect(() => {
        setText('');
    }, [postAdded === true]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if(!text || text.trim()){
            return alert('게시글을 작성하세요.');
        }
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                content:text.trim(),
            },
        });
    }, [text]);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    return(
        <Form encType="multipart/form-data" style={{margin:'10px 0 20px'}} onSubmit={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText}/>
            <div>
                <input type="file" multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float:'right' }} htmlType="submit" isLoading={isAddingPost}>짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v,i) => {
                    <div key={v} style={{display:'inline-block'}}>
                        <img src={'http://localhost:3000/'+ v} alt="" style={{width:'200px'}}/>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                })}
            </div>
        </Form>
    );
};

export default PostForm;