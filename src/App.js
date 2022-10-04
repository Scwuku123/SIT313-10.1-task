import './App.css';

//import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import React, { useState } from 'react';

import { Col, Row } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Input, Carousel, Image, Card, Button, Typography, Divider, List } from 'antd';
import Subscriber from './components/Subscriber'


function App() {
  const items = [
    {
      label: 'Deakin@DEV',
      key: 'app',
      disabled: true,
    },
    {
      label: 'Post',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: '2021 Post',
          label: '2021 Post',
          children: [
            {
              label: 'Post news 1',
              key: 'setting:1',
            },
            {
              label: 'Post news 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: '2022 Post',
          label: '2022 Post',
          children: [
            {
              label: 'Post news 3',
              key: 'setting:3',
            },
            {
              label: 'Post news 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },

  ];

  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const { Search } = Input;
  const contentStyle = {
    height: '560px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const { Title } = Typography;
  const data1 = [
    'Home',
    'Questions',
    'Articles',
    'Tutorials',
  ];
  const data2 = [
    'FAQs',
    'Support',
    'Help',
    'Contact Us',
  ];
  const data3 = [
    'Facebook',
    'Instagram',
    'Twitter',
    'Telegram',
  ];


  return (
    <div>
      <Row>
        <Col span={18}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Col>
        <Col span={6}>
          <Search
            placeholder="Search the post here"
            style={{
              width: 200,
            }}
          />
        </Col>
      </Row>
      
      <Row>
      <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
      </Row>
      <Row>
        <Col span={24}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <Image

                  src="https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image src="https://images.unsplash.com/photo-1530263503756-b382295fd927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image src="https://images.unsplash.com/photo-1530143584546-02191bc84eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />

              </h3>
            </div>
          </Carousel>
        </Col>
      </Row>
      <br />
      <br />

      <br />

      <Row gutter={16}>
        <Col span={10}></Col>
        <Col span={6}>
          <Title level={2}>Feature Articles</Title>
        </Col>
        <Col span={8}></Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Card title="Bike now 1" bordered={false}>
            <Image src="https://images.unsplash.com/photo-1496150590317-f8d952453f93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            Card content: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Bike now 2" bordered={false}>
            <Image src="https://images.unsplash.com/photo-1618668869139-b32a43fb3818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            Card content: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Bike now 3" bordered={false}>
            <Image src="https://images.unsplash.com/photo-1580094149999-1628c1d1efb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            Card content: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}></Col>
        <Col span={8}>
          <Button type="primary" block>
            See All Articles
          </Button>
        </Col>
     
        <Col span={8}></Col>
      </Row>
    
      <br />
      <br />
      <Row gutter={16}>
        <Col span={10}></Col>
        <Col span={6}>
          <Title level={2}>Feature Tutorials</Title>
        </Col>
        <Col span={8}></Col>
      </Row>
     

      <Row gutter={16}>
        <Col span={8}>
          <Card title="Bike now 1" bordered={false}>
            <Image src="https://images.unsplash.com/photo-1586282023338-52aa50a846ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            Card content: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Bike now 2" bordered={false}>
            <Image src="https://images.unsplash.com/photo-1585829365343-ea8ed0b1cb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            Card content: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Bike now 3" bordered={false}>
            <Image src="https://images.unsplash.com/photo-1556037757-40496ad2fbc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            Card content: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}></Col>
        <Col span={8}>
          <Button type="primary" block>
            See All Tutorials
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Subscriber />
      <br />
      <br />
      <br />
      <br />
      <Row>
      <Col span={6}></Col>
        <Col span={4}>
          <List
            size="small"
            header={<h3>Explore</h3>}

            dataSource={data1}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
        <Col span={4}>
          <List
            size="small"
            header={<h3>Support</h3>}

            dataSource={data2}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
        <Col span={4}>
          <List
            size="small"
            header={<h3>Social</h3>}

            dataSource={data3}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col span={10}></Col>
        <Col span={6}>DEV@Deakin 2022</Col>
        <Col span={8}></Col>
      </Row>
      <br />
      <br />
    </div>



  );
}

export default App;
