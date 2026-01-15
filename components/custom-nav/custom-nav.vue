<template>
  <!-- 自定义导航容器：适配状态栏高度 + 多端样式 -->
  <view class="custom-nav-wrap" :style="{ 
	      top: statusBarTop+ 'px',
	      backgroundColor: bgColor,
	      height: navBarHeight + 'px'
	    }">
	  <view
	    class="custom-nav" 
	  >
	    <!-- 左侧返回按钮 -->
	    <view class="nav-left" @click="handleBack" v-if="showBack">
	  	 <up-icon name="arrow-left" color="#333" size="24"></up-icon>
	    </view>
	  	<!-- 左侧功能按钮 -->
	  	<view class="nav-left-addr" @tap="showAddrModal=!showAddrModal" v-if="showAddr">
	  		<image src="/static/index/local.png"></image>
	  		<text>{{addressText}}</text>
	  		<u-icon name="arrow-down-fill" size="8"></u-icon>
	  	</view>
	  
	    <!-- 中间标题 -->
	    <view class="nav-title" :style="{ color: titleColor}">
	      {{ title }}
	    </view>
	  
	    <!-- 右侧操作区（支持文字/图标） -->
	    <view class="nav-right" @click="handleRightClick" v-if="rightText || rightIcon">
	      <uni-icons v-if="rightIcon" :type="rightIcon" size="20" :color="iconColor"></uni-icons>
	      <text v-else :style="{ color: iconColor }">{{ rightText }}</text>
	    </view>
	  </view>
	  <up-picker closeOnClickOverlay 
	  	  @cancel="showAddrModal=false" 
	  	  @close="showAddrModal=false" 
	  	  @confirm="onConfirm"
	  	  :show="showAddrModal" 
	  	  :columns="options"
	  >
	  </up-picker>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { onLoad, onReady, onShow } from '@dcloudio/uni-app';
// 1. 定义Props（Vue3 语法糖）
const props = defineProps({
  // 导航标题
  title: {
    type: String,
    default: '自定义导航'
  },
  // 是否显示返回按钮
  showBack: {
    type: Boolean,
    default: true
  },
  // 是否显示选择地址按钮
  showAddr:{
	  type:Boolean,
	  default:false
  },
  // 右侧按钮文字
  rightText: {
    type: String,
    default: ''
  },
  // 右侧图标（uni-icons 类型）
  rightIcon: {
    type: String,
    default: ''
  },
  // 导航背景色
  bgColor: {
    type: String,
    default: 'transparent'
  },
  // 标题颜色
  titleColor: {
    type: String,
    default: '#333333'
  },
  // 图标/右侧文字颜色
  iconColor: {
    type: String,
    default: '#007aff'
  },
  options:{
	  type:Array,
	  default:[]
  }
});
const showAddrModal = ref(false)
const titleTop = ref(0)
const addressText = ref(props.options[0][0])
// 2. 定义Emits（透传事件）
const emit = defineEmits(['rightClick', 'backClick']);

// 3. 响应式数据
const statusBarTop = ref(10); // 状态栏高度（px）
const navBarHeight = ref(44); // 导航栏核心高度（默认44px，小程序胶囊适配后动态修改）

// 4. 生命周期：获取系统信息（Vue3 + Uniapp 兼容）
onMounted(() => {
	console.log(123)
  const systemInfo = uni.getSystemInfoSync();
  // 基础状态栏高度
  statusBarTop.value = systemInfo.safeArea.top || 10
  navBarHeight.value = systemInfo.statusBarHeight;
	console.log('systemInfo',systemInfo)
  // 微信小程序：适配胶囊按钮高度/位置
  //#ifdef MP-WEIXIN
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
  // 胶囊按钮高度 = 导航栏高度
  navBarHeight.value = menuButtonInfo.height;
  console.log('menuButtonInfo',menuButtonInfo)
  // 胶囊按钮上下间距 = 导航栏额外高度（可选）
  const navExtraHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2;
  navBarHeight.value += navExtraHeight;
  //#endif
});

// 5. 方法定义
// 返回上一页
const handleBack = () => {
  emit('backClick'); // 透传返回事件（可选）
  uni.navigateBack({
    delta: 1,
    fail: () => {
      // 无页面可返回时跳首页
      uni.reLaunch({ url: '/pages/index/index' });
    }
  });
};
// 选择地址
const onConfirm = e => {
	addressText.value = e.value[0]
	showAddrModal.value = false
}
// 右侧按钮点击
const handleRightClick = () => {
  emit('rightClick');
};
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>