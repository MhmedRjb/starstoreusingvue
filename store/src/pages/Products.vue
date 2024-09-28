<template>
	<body class="ml-5">
		<h1 class="text-2xl font-bold text-gray-900">🌞 Our stare store 🌞</h1>

		<h2 class="mt-1 font-semibold text-2xl">Our Product</h2>

		<div class="mt-4 grid grid-cols-5 gap-3" v-if="productList">
			<productCard v-for="product in productList" :key="product.name" :product="product" />
		</div>
	</body>
</template>
<script setup>
import { createListResource } from 'frappe-ui'
import { computed } from 'vue'
import productCard from '../components/productCard.vue'
const productsResource = createListResource({
	doctype: 'Product',
	fields: ['name', 'price', 'currency', 'description', 'preview_image'],
	auto: true,
})

const productList = computed(() => {
	if (productsResource.list.data) {
		return productsResource.list.data
	}
	return []
})
</script>
