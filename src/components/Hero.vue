<template>
    <section class="hero">
        <div class="hero__overlay">
            <header class="navbar">
                <div class="navbar__left">
                    <img src="@/assets/img/logo.svg" alt="Foodnow Logo" class="logo" />
                </div>

                <nav class="navbar__center" :class="{ 'is-open': isMenuOpen }">
                    <a href="#" class="navbar__center-mobile">Login</a>
                    <a href="#" class="navbar__center-mobile">Register</a>
                    <a href="#">Home</a>
                    <a href="#" class="active">Order</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact us</a>
                </nav>

                <div class="navbar__right">
                    <a href="#" class="navbar__right-mobile">Login</a>
                    <a href="#" class="navbar__right-mobile btn-register">Register</a>
                    <div class="burger-icon-wrapper">
                        <BurgerIcon @toggle="isMenuOpen = !isMenuOpen" :is-open="isMenuOpen"/>
                    </div>
                </div>
            </header>

            <div class="hero__content">
                <h1 class="hero__title">Pizza order</h1>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BurgerIcon from './BurgerIcon.vue';

const isMenuOpen = ref(false)
</script>

<style scoped lang="scss">
.hero {
    position: relative;
    height: 100vh;
    background: url('@/assets/img/hero.png') center center / cover no-repeat;

    &__overlay {
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $space-md $space-lg;
        position: relative;

        a {
            color: $color-white;
            margin: 0 0.75rem;
            font-weight: 400;
            text-decoration: none;

            &.active {
                color: $color-primary;
            }

            &:hover {
                color: $color-primary;
            }
        }

        .logo {
            font-size: 1.5rem;
        }

        .btn-register {
            background-color: $color-primary;
            border-radius: 99px;
            padding: 0.6rem 1rem;
            font-weight: 600;

            &:hover {
                color: $color-white;
                background-color: $color-primary-darken;
            }
        }

        .navbar__center {
            display: flex;
            gap: 1rem;

            &-mobile {
                display: none;
            }

            @media (max-width: 768px) {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.85);
                flex-direction: column;
                padding: $space-md;
                text-align: center;
                z-index: 99;

                &.is-open {
                    display: flex;
                }

                a {
                    padding: $space-sm 0;
                    color: white;
                }

                &-mobile {
                    display: block;
                }
            }
        }

        .navbar__right {
            display: flex;
            align-items: center;
            gap: 1rem;

            .navbar__right-mobile {
                display: inline-block;
            }

            .burger-icon-wrapper {
                display: none;

                @media (max-width: 768px) {
                    display: inline-block;
                }
            }

            @media (max-width: 768px) {
                .navbar__right-mobile {
                    display: none;
                }
            }
        }
    }

    &__content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .hero__title {
            font-size: $font-display;
            font-weight: 700;
            color: $color-primary;
        }
    }
}

.logo {
    height: 32px;
    width: auto;
    display: block;
}
</style>
