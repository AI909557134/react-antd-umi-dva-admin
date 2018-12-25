import { Component } from 'react';
import { Layout, Menu, Icon} from 'antd';
import Link from 'umi/link';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu; 

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
        	<div style={{fontSize:'16px',margin: '16px'}}>伙拼云商女鞋货源平台-采购商</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>我的工作台</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="dashboard" /><span>订单管理</span></span>}>
              <Menu.Item key="2"><Link to="/order/shoplist">店铺订单</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/order/myorder">我的订单</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/order/customer">售后订单</Link></Menu.Item>
           	</SubMenu>
           	<SubMenu key="sub2" title={<span><Icon type="dashboard" /><span>服务商管理</span></span>}>
              <Menu.Item key="5"><Link to="">代发设置</Link></Menu.Item>
              <Menu.Item key="6"><Link to="">供应商设置</Link></Menu.Item>
              <Menu.Item key="7"><Link to="">同步订单设置</Link></Menu.Item>
           	</SubMenu>
           	<SubMenu key="sub3" title={<span><Icon type="dashboard" /><span>商品管理</span></span>}>
              <Menu.Item key="8"><Link to="">进货单</Link></Menu.Item>
              <Menu.Item key="9"><Link to="">发布</Link></Menu.Item>
              <Menu.Item key="10"><Link to="">下载记录</Link></Menu.Item>
              <Menu.Item key="11"><Link to="">关注</Link></Menu.Item>              
           	</SubMenu>
           	<SubMenu key="sub4" title={<span><Icon type="dashboard" /><span>资金管理</span></span>}>
              <Menu.Item key="12"><Link to="">资金明细</Link></Menu.Item>
              <Menu.Item key="13"><Link to="">我要充值</Link></Menu.Item>
              <Menu.Item key="14"><Link to="">我要提现</Link></Menu.Item>
              <Menu.Item key="15"><Link to="">我要转账</Link></Menu.Item>              
           	</SubMenu>
           	<SubMenu key="sub5" title={<span><Icon type="user" /><span>账号管理</span></span>}>
              <Menu.Item key="16"><Link to="">我的资料</Link></Menu.Item>
              <Menu.Item key="17"><Link to="">修改用户名</Link></Menu.Item>
              <Menu.Item key="18"><Link to="">账号绑定</Link></Menu.Item>
              <Menu.Item key="19"><Link to="">修改邮箱</Link></Menu.Item>              
           	</SubMenu>
           	<SubMenu key="sub6" title={<span><Icon type="dashboard" /><span>账户安全</span></span>}>
              <Menu.Item key="20"><Link to="">登录密码</Link></Menu.Item>
              <Menu.Item key="21"><Link to="">支付密码</Link></Menu.Item>
              <Menu.Item key="22"><Link to="">绑定支付宝</Link></Menu.Item>
              <Menu.Item key="23"><Link to="">修改手机</Link></Menu.Item>              
           	</SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '20px 20px 0' }}>
          	<div style={{ padding: 20, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;