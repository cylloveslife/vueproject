<template>
	
	<div class="app-container">
		<el-table :v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
			<el-table-column label="类型">
				<template slot-scope="scope">
					{{ scope.row.categoryTypyTd }}
				</template>
			</el-table-column>
			<el-table-column label="值" align="center">
				<template slot-scope="scope">
					<span>{{ scope.row.value }}</span>
				</template>
			</el-table-column>
			<el-table-column label="父级"  align="center">
				<template slot-scope="scope">
					{{ scope.row.parentId }}
				</template>
			</el-table-column>
			<el-table-column label="顺序"  align="center">
				<template slot-scope="scope">
					{{ scope.row.descn }}
				</template>
			</el-table-column>
			<el-table-column label="启用"  align="center">
				<template slot-scope="scope">
					{{ scope.row.enabled }}
				</template>
			</el-table-column>
			<el-table-column label="描述" align="center">
				<template slot-scope="scope">
					{{ scope.row.scope }}
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
	} from '@/api/basicDataM'
	


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
					pageSize: 100,
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
