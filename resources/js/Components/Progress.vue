<script setup>
defineProps({
    progress: {
        type: Number,
        default: 0,
    },
    state: {
        type: String,
        default: 'inactive',
    },
});
</script>

<template>
    <div class="mt-4 mb-2">
        <div class="flex">
            <p class="w-full">
                Progress
            </p>

            <p>
                {{ progress }}%
            </p>
        </div>

        <div class="progress">
            <div class="bar" :class="state" :style="`width: ${progress}%;`"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
p {
    display: flex;
    gap: 3px;
    font-size: 90%;
}

.progress {
    background-color: #dedede;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
    margin: 0 0 6px 0;
    border-radius: 15px;
    overflow: hidden;

    .bar {
        position: relative;
        height: 8px;
        background-color: #4285f4;
        color: #fff;
        width: 0px;
        transition: .66s cubic-bezier(0.075, 0.82, 0.165, 1) width;
    }
}
</style>
