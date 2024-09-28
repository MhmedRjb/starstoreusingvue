<template>
	<router-link
		:to="{
			name: 'ProductsDetailsPage',
			params: {
				name: product.name,
			},
		}"
		href="#"
		class="shadow-md rounded-sm p-4 space-y-4 flex items-center justify-between flex-col"
	>
		<div>
			<img
				class="h-32 w-32 object-contain"
				:src="product.preview_image"
				alt="product.name"
			/>
			<p class="text-base text-gray-700 font-medium mt-2">{{ product.name }}</p>
		</div>
		<p class="text-xl font-mono font-semibold">
			{{ formatPrice(product.price, product.currency) }}
		</p>
	</router-link>
</template>
<script setup>
import formatPrice from '../utils.js'

const props = defineProps({
	product: Object,
})
</script>
