<template>
	<h1>Product Details</h1>
	<h2>{{ route.params.name }}</h2>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
route.params.name
</script>
