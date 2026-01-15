<template>
	<view class="content" v-if="isFinish">
		<view class="nav">
			<custom-nav 
			title="和泰元康" 
			rightIcon="share" 
			titleColor="#000" 
			:showAddr="true" 
			:showBack="false"
			:options="addresList"
			@rightClick="handleShare"
			@backClick="handleBack"
			>
			</custom-nav>
		</view>
		<view class="head">
			<image src="/static/index/head.png" mode=""></image>
		</view>
		<view class="search">
			<view class="search_content">
				<view class="search_input">
					<up-search placeholder="搜索姓名、科室、医院、疾病、药品名称" bgColor="rgba(238, 238, 238, 0.85)" :showAction="false"
						v-model="keyword"></up-search>
				</view>
				<view class="chart"></view>
			</view>
		</view>
		<view class="main">
			<view class="nav_menu">
				<view class="item">
					<image src="/static/jswz.png" mode=""></image>
					<text>极速问诊</text>
				</view>
				<view class="item">
					<image src="/static/yygh.png" mode=""></image>
					<text>预约挂号</text>
				</view>
				<view class="item">
					<image src="/static/fzmy.png" mode=""></image>
					<text>复诊买药</text>
				</view>
				<view class="item">
					<image src="/static/yyzx.png" mode=""></image>
					<text>用药咨询</text>
				</view>
			</view>
			<view class="type_card">
				<view class="type">
					<view class="title">按科室找</view>
					<view class="tips">覆盖389个科室</view>
					<view class="btn">去找医生</view>
				</view>
				<view class="list">
					<text :class="{active:item.active}" v-for="(item,index) in department"
						@click="handleDepartment(department,index)" :key="index">{{item.name}}</text>
				</view>
			</view>
			<view class="type_card">
				<view class="type">
					<view class="title">按疾病找</view>
					<view class="tips">覆盖180个科室</view>
					<view class="btn">去找医生</view>
				</view>
				<view class="list">
					<text :class="{active:item.active}" v-for="(item,index) in sickness"
						@click="handleDepartment(sickness,index)" :key="index">{{item.name}}</text>
				</view>
			</view>
			<view class="doctors">
				<view class="title">精选名医</view>
				<view class="doctors_content">
					<view class="left">
						<view class="info">
							<view class="name">沈勇会</view>
							<view class="award">三甲医院主任院长</view>
						</view>
						<view class="avator">
							<image src="/static/index/doctor1.png"></image>
						</view>
					</view>
					<view class="right">
						<view class="item" v-for="i in 3" :key="i">
							<view class="item_info">
								<view class="name">沈勇会</view>
								<view class="award">三甲医院主任院长</view>
							</view>
							<view class="item_hd">
								<image src="/static/index/doctor2.png"></image>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="category">
				<up-tabs :list="category" lineWidth="30" lineColor="#107AF4" :activeStyle="{
					           color: '#333',
					           fontWeight: 'bold',
					           transform: 'scale(1.05)'
					       }" :inactiveStyle="{
					           color: '#606266',
					           transform: 'scale(1)'
					       }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
				</up-tabs>
				<view class="tab_content">
					<view class="iformation" v-for="i in 10" :key="i">
						<view class="basic">
							<view class="avator">
								<up-lazy-load
									image="https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg"></up-lazy-load>
								<!-- <image src="/static/index/head.png"></image> -->
							</view>
							<view class="sign">
								<view class="sign_name">
									<view class="name">华天昊</view>
									<view class="tag">
										皮肤科-主任医师
									</view>
								</view>
								<view class="address">
									<text>中山大学附属第一医院</text>
								</view>
							</view>
						</view>
						<view class="describe">
							擅长：擅长脱发疾病的诊治及头皮毛发健康管理，尤其是雄激素性脱发、斑秃、拔毛癖、休止期脱发、瘢痕性脱发等； 对皮肤美容及抗衰深有研究，熟练掌握多种光电治疗操作及肉毒...
						</view>
						<view class="feature">
							<view class="btn">
								<image src="/static/index/word.png" mode=""></image>
								<text>图文问诊</text>
							</view>
							<view class="btn">
								<image src="/static/index/phone.png" mode=""></image>
								<text>电话问诊</text>
							</view>
							<view class="btn">
								<image src="/static/index/video.png" mode=""></image>
								<text>视频问诊</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	<Skeleton v-else />
</template>

<script setup>
	import Skeleton from './components/Skeleton.vue'
	import { sleep } from '@/utils/utils'
	import {
		reactive,
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		hospitalList
	} from '@/api/api.js'
	// 搜索变量
	const keyword = ref('')
	// 数据加载完成
	const isFinish = ref(false)
	// 地址数据
	const addresList = ref([['深圳','惠州','杭州']])
	// 科室种类
	const department = reactive([{
			name: '骨科',
			active: false
		},
		{
			name: '消化科',
			active: false
		},
		{
			name: '心内科',
			active: false
		},
		{
			name: '儿科',
			active: false
		},
		{
			name: '妇科',
			active: false
		},
		{
			name: '皮肤科',
			active: false
		},
		{
			name: '呼吸科',
			active: false
		},
		{
			name: '全科',
			active: false
		},
	])
	// 疾病种类
	const sickness = reactive([{
			name: '失眠',
			active: false
		},
		{
			name: '痘痘痤疮',
			active: false
		},
		{
			name: '脱发',
			active: false
		},
		{
			name: '咳嗽',
			active: false
		},
		{
			name: '月经不调',
			active: false
		},
		{
			name: '早泄',
			active: false
		},
		{
			name: '亚健康',
			active: false
		},
		{
			name: '鼻炎',
			active: false
		},
	])
	// 科室分类
	const category = reactive([{
			name: '全部',
			active: false
		},
		{
			name: '骨科',
			active: false
		},
		{
			name: '妇科',
			active: false
		},
		{
			name: '男科',
			active: false
		},
		{
			name: '消化科',
			active: false
		},
		{
			name: '皮肤科',
			active: false
		},
	])
	// 点击科室种类
	const handleDepartment = (data, idx = 0) => {
		data.forEach((item, i) => {
			if (idx === i) {
				item.active = true
			} else {
				item.active = false
			}
		})
	}
	const goPage = (e) => {
		uni.navigateTo({
			url: e.currentTarget.dataset.url
		})
	}
	const handleShare = () => {}
	const handleBack = () => {}
	onLoad(async () => {
		hospitalList().then(res => {
			console.log('succ', res)
		}).catch(err => {
			console.log('catch', err)
		})
		await sleep(3)
		isFinish.value = true
	})
</script>

<style lang="scss" scoped>
	@import "./style/index.scss";
</style>