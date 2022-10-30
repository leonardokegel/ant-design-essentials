import { useState } from 'react'
import './App.css'

import { Layout, Menu, Breadcrumb, Card, Row, Col, Typography } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';

let { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout' style={{ width: '183.6vh' }}>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
            <Title>Dashboard</Title>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Card style={{ flex: '1', height: '300px' }}>
                Cool
              </Card>
              <Card style={{ flex: '1', height: '300px' }}>
                Cool
              </Card>
              <Card style={{ flex: '1', height: '300px' }}>
                Cool
              </Card>
              <Card style={{ flex: '1', height: '300px' }}>
                Cool
              </Card>
            </div>
            {/* <Row style={{ width: '100%' }}>
              <Col>
                Test
                <Card title="Default size card" extra={<a href='#'>More</a>} style={{ width: 300 }}>
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                </Card>
                <Card size='small' title="Small size card" extra={<a href='#'>More</a>} style={{ width: 300 }}>
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                </Card>
              </Col>
            </Row> */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design</Footer>
      </Layout>
    </Layout>
  )
}

export default App
