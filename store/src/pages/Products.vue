<template>
  <body class="ml-5">
    <h1 class=" text-2xl font-bold text-gray-900">
    🌞  Our stare store 🌞
  </h1>

  <h2 class="  mt-1 font-semibold text-2xl">Our Product </h2>

  <div class="mt-4  grid grid-cols-5  gap-3 " v-if="productList">
    <a herf="#" class="shadow-md rounded-sm p-4  space-y-4 flex items-center justify-between flex-col "  v-for="product in productList" :key="product.name">
      <div>
        <img class="h-32 w-32 object-contain" :src="product.preview_image" alt="product.name" />
        <p class="text-base text-gray-700 font-medium mt-2">{{ product.name }}</p>
      </div>
        <p class="text-xl font-mono font-semibold ">{{ formatPrice(product.price,product.currency ) }}</p>
    </a>
  </div>
  </body>
  
</template>
<script setup>
import { createListResource } from "frappe-ui";
import { computed } from "vue";
import { formatPrice } from "../utils";
const productsResource = createListResource({
  doctype: "Product",
  fields: ["name", "price","currency" , "description","preview_image"],
  auto:true

});

const productList = computed(() => {
  if (productsResource.list.data) {
    return productsResource.list.data;
  }
  return [];
})

</script>
