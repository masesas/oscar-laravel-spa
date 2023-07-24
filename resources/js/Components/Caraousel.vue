<script setup>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

defineProps({
    items: {
        type: Array,
        required: true,
    }
})

</script>
<template>
    <div class="row row-cols-1">
        <!-- <div class="col">
            <h4 class="display-5 fw-bolder text-center text-black">Review</h4>
        </div> -->
        <div class="col">
            <Carousel :wrapAround="true" :transition="500" :autoplay="2000">
                <Slide v-for="item in items" :key="item" class="w-100">
                    <div class="carousel__item">
                        <div class="container">
                            <div class="card rounded">
                                <img class="img-fluid" :src="item" alt="review" />
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
</template>
<style scoped>
.review-container {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5)
}
</style>
