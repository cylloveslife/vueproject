<template>
	
	<div class="app-container">
		<el-table :v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
			<el-table-column label="名称">
				<template slot-scope="scope">
					{{ scope.row.name }}
				</template>
			</el-table-column>
			<el-table-column label="功能代码" align="center">
				<template slot-scope="scope">
					<span>{{ scope.row.fnCodes }}</span>
				</template>
			</el-table-column>
			<el-table-column label="是否启用" align="center">
				<template slot-scope="scope">
					{{ scope.row.enabled }}
				</template>
			</el-table-column>
		</el-table>
		<!-- <el-pagination layout="prev,paper,next" @current-change="fetchData" :current-page.sync="listQuery.pageNum" :page-size="listQuery.pageSize" :total="total"></el-pagination> -->
		<el-pagination layout="prev,pager,next" @current-change="fetchData" :current-page.sync="listQuery.pageNum" :page-size="listQuery.pageSize"
		 :total="total"></el-pagination>

	</div>
</template>
<script>

	import {
		getList
	} from '@/api/userGroupM'

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
					pageSize: 2,
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
					console.log("==========", this.total)
				})
			}
		},
	}
</script>
