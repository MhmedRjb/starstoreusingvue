<template>
	<div class="p-5">
		<div v-if="productDoc">
			<h1 class="text-3xl font-bold text-gray-900">
				{{ productDoc.name }}
			</h1>
			<div class="sm:flex sm:gap-12">
				<div class="flex gap-3 flex-col w-fit">
					<div
						@click="currentPreviewImageURL = image.image_url"
						class="border-2 border-gray-600/25 rounded hover:border-black-overlay-200 cursor-pointer"
						:class="[
							currentPreviewImageURL === image.image_url
								? 'border-2 border-gray-700'
								: 'border-gray-100',
						]"
						v-for="image in productDoc.images"
					>
						<img class="h-16" :src="image.image_url" alt="dd" />
					</div>
				</div>
				<img class="sm:max-w-lg" :src="currentPreviewImageURL" />
			</div>
			<P class="text-3xl font-bold font-sans">
				{{ formatPrice(productDoc.price, productDoc.currency) }}
			</P>
		</div>
	</div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import formatPrice from '../utils'
import { createDocumentResource } from 'frappe-ui'
const route = useRoute()
const currentPreviewImageURL = ref('')

const productResource = createDocumentResource({
	doctype: 'Product',
	name: route.params.name,
	auto: true,
	onSuccess(data) {
		if (data.images.length > 0) {
			currentPreviewImageURL.value = data.images[0].image_url
		} else {
			currentPreviewImageURL.value = data.preview_image
		}
	},
})

const productDoc = computed(() => {
	if (productResource.doc) {
		return productResource.doc
	}
})
</script>
