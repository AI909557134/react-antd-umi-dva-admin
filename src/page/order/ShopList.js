import Styles from './styles.less';
import React, { Component } from 'react';
import { Breadcrumb, Table } from 'antd';
import { connect } from 'dva';

const namespace = 'shoplist';

const mapStateToProps = (state) => {
  const shopList = state[namespace].shopList;  
  return {
    shopList,
    Loading: state.loading.effects['shoplist/queryList'],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryList`,
      });
    },
  };
};

@connect(mapStateToProps,mapDispatchToProps)

export default class shopList extends Component {
	componentDidMount() {
    this.props.onDidMount();
 	}  
	render(){
		const { shopList, Loading } = this.props;
		const columns = [
	    {
	      title: '名称',
	      dataIndex: 'name',
	    },
	    {
	      title: '描述',
	      dataIndex: 'desc',
	    },
	    {
	      title: '链接',
	      dataIndex: 'url',
	      render: value => <a href={value}>{value}</a>,
	    },
  	];
   	return (
	   	<div>
		   	<Breadcrumb>
			    <Breadcrumb.Item>我的工作台</Breadcrumb.Item>
			    <Breadcrumb.Item>订单管理</Breadcrumb.Item>
			    <Breadcrumb.Item>店铺订单</Breadcrumb.Item>
		  	</Breadcrumb><br/>		
		  	<Table columns={columns} dataSource={shopList} rowKey="id" loading={Loading} size="middle"/>
	    </div>
	   	/*<div className={Styles.hello}><span className={Styles.deleted}>Hello World</span></div>*/
		)
  }
}
