<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import SlideToggle from '../Animations/SlideToggle';
import GetElementPosition from '../Utility/GetElementPosition';

const toggle = e => {
    /** @type {HTMLDivElement} */
    const body = e.currentTarget.nextSibling;

    /** @type {HTMLOrSVGElement} */
    const icon = e.currentTarget.querySelector('.arrow-icon svg');

    new SlideToggle(body).finally(
        () => {
            const top = new GetElementPosition(body).top;

            if (top !== 0) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = '';
            }
        }
    );
};
</script>

<template>
    <div class="accordion">
        <div
            @click="toggle"
            class="head"
        >
            <div class="flex">
                <div class="slot">
                    <slot name="head" />
                </div>

                <div class="arrow-icon w-full flex justify-end items-center">
                    <ChevronDownIcon class="w-5 h-5" />
                </div>
            </div>
        </div>

        <div class="body hidden">
            <slot name="body" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.accordion {
    .head {
        cursor: pointer;

        .arrow-icon {
            svg {
                transition: .3s;
                margin-inline-start: auto;
            }
        }
    }
}
</style>
