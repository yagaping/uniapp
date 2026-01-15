<template>
	<view class="child">子组件</view>
	<slot name="child" title="999" :obj="{id:1}"></slot>
	<view>count:{{count}}</view>
</template>

<script setup>
import { ref } from 'vue';

	const count = ref(0)
	defineExpose({
		count,
	})
</script>

<style lang="scss">
	.child{
		color:green;
	}
</style>