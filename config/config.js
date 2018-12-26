export default {
	singular: true,
	plugins: [
    ['umi-plugin-react', {
    	antd: true,
    	dva: true,
    }],
  ],
	routes: [{
    path: '/',
    component: '../layout',
    routes:[
    	{
        path: '/',
        component: 'Home',
      },
      {
        path: '/home',
        component: 'Home'
      },
      {
        path: '/order',
        routes: [
          { path: '/order/shoplist', component: 'order/ShopList' },
          { path: '/order/myorder', component: 'order/MyOrder' },
          { path: '/order/customer', component: 'order/Customer' }
        ]
      },
    ]
  }],
//	proxy: {
//  '/dev': {
//    target: 'http://testuapi.huopin.cn',
//    changeOrigin: true,
//  },
//	},
};