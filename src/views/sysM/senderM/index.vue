<template>
	<div id="app">
		<el-row>
			<el-button type="primary" round>添加</el-button>
			<el-button type="warning" round>修改</el-button>
			<el-button type="danger" round>删除</el-button>
			<el-button type="info" round>刷新</el-button>
		</el-row>
	</div>
</template>
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.4.11/lib/index.js"></script>
@import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");
<script>
	import {
		getList
	} from '@/api/senderM'
	new Vue().$mount('#app')
	
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
