import React from 'react'
import {List, Button, Card} from 'antd'
import Icon from '@ant-design/icons'
import NicknameEditForm from '../components/NicknameEditForm'

const profile = () => {
    return(
        <div>
            <NicknameEditForm/>
            <List
                style={{ marginBottom : '20px'}}
                grid={{gutter:4, xs:2, md:3}}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{width:'100%'}}>더 보기</Button>}
                bordered
                dataSource={['리빈노이드', '노드', 'SNS']}
                renderItem={ item =>(
                    <List.Item style={{marginTop:'20px'}}>
                        <Card actions={[
                            <Icon key="stop" type="stop"/>
                        ]}><Card.Meta description={item}/></Card>
                    </List.Item>
                )}
            />
            <List
                style={{ marginBottom : '20px'}}
                grid={{gutter:4, xs:2, md:3}}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{width:'100%'}}>더 보기</Button>}
                bordered
                dataSource={['리빈노이드', '노드', 'SNS']}
                renderItem={ item =>(
                    <List.Item style={{marginTop:'20px'}}>
                        <Card actions={[
                            <Icon key="stop" type="stop"/>
                        ]}><Card.Meta description={item}/></Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default profile;