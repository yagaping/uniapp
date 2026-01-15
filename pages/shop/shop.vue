<template>
	<view class="child">
		买药
		<child ref="childRef">
			<template #child="{title,obj}">
				333{{obj.id}}
				<button @click="onClick">点击</button>
			</template>
		</child>
	</view>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	import child from "./child.vue"
	const childRef = ref(null)
	onMounted(()=>{
		console.log('childRef',childRef.value.count)
	})
	const onClick = () =>{
		childRef.value.count++
		console.log('count',childRef.value.count)
	}
</script>

<style>
	       
</style>
