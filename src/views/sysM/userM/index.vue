<template>
	<div class="app-container">

		<el-table :v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
			<!-- <el-row>
				<el-button type="primary" round>添加</el-button>
				<el-button type="warning" round>修改</el-button>
				<el-button type="danger" round>删除</el-button>
				<el-button type="info" round>刷新</el-button>
			</el-row> -->
			<el-table-column label="名称">
				<template slot-scope="scope">
					{{ scope.row.name }}
				</template>
			</el-table-column>
			<el-table-column label="密码"  align="center">
				<template slot-scope="scope">
					<span>{{ scope.row.password }}</span>
				</template>
			</el-table-column>
			<el-table-column label="是否锁定"  align="center">
				<template slot-scope="scope">
					{{ scope.row.locked }}
				</template>
			</el-table-column>
			<el-table-column label="所在组"  align="center">
				<template slot-scope="scope">
					{{ scope.row.userGroupM_name }}
				</template>
			</el-table-column>
		</el-table>
		<!-- <el-pagination layout="prev,paper,next" @current-change="fetchData" :current-page.sync="listQuery.pageNum" :page-size="listQuery.pageSize" :total="total"></el-pagination> -->
<el-pagination layout="prev,pager,next" @current-change="fetchData" :current-page.sync="listQuery.pageNum" :page-size="listQuery.pageSize" :total="total"></el-pagination>

	</div>
</template>

<script>
	import {
		getList
	} from '@/api/userM'

	export default {
		filters: {
			statusFilter(status) {
				const statusMap = {
					published: 'success',
					draft: 'gray',
					deleted: 'danger'
				}
				return statusMap[status]
			}
		},
		data() {
			return {
				list: null,
				listLoading: true,
				listQuery: {
					pageNum: 1,
					pageSize: 10,
					name: null
				},
				total: 10
			}
		},
		created() {
			this.fetchData()
		},
		methods: {
			fetchData() {
				this.listLoading = true
				getList(this.listQuery).then(response => {					
					this.total = response.data.total
					this.list = response.data.list
					this.listLoading = false
				})
			}
		},
	}
</script>
