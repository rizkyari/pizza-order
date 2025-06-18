<template>
    <footer class="footer">
        <div class="footer__top">
            <!-- Brand and Socials -->
            <div class="footer__section">
                <div class="footer__brand">
                    <img src="@/assets/img/logo-alt.svg" alt="Foodnow Logo" class="footer__logo" />
                </div>
                <p class="footer__heading">Find Us :</p>
                <div class="footer__socials">
                    <img src="@/assets/img/icons/facebook.svg" alt="Facebook" />
                    <img src="@/assets/img/icons/instagram.svg" alt="Instagram" />
                    <img src="@/assets/img/icons/youtube.svg" alt="YouTube" />
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="footer__section">
                <p class="footer__heading">Navigation</p>
                <div class="footer__links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
            </div>

            <!-- Contact -->
            <div class="footer__section">
                <p class="footer__heading">Contact</p>
                <ul>
                    <li class="footer__heading-subtitle"><img src="@/assets/img/icons/mail.svg" alt="mail" /> Food.now@mail.com</li>
                    <li class="footer__heading-subtitle"><img src="@/assets/img/icons/phone.svg" alt="phone" /> +62848477102943</li>
                    <li class="footer__heading-subtitle"><img src="@/assets/img/icons/whatsapp.svg" alt="whatsapp" /> +628184938494</li>
                </ul>
            </div>

            <!-- Location -->
            <div class="footer__section">
                <p class="footer__heading">Location</p>
                <div class="footer__heading-subtitle"><img src="@/assets/img/icons/location.svg" alt="location" /> <strong>Kerobokan</strong></div>
                <p class="footer__heading-address">
                    Jl. Raya Kerobokan Br Taman, Kuta No.98,<br />
                    Kerobokan Kelod, Kec. Kuta Utara,<br />
                    Kabupaten Badung, Bali 80361
                </p>
            </div>
        </div>

        <div class="footer__bottom">
            <p>Copyright &copy; 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | Privacy Policy</p>
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    margin-top: 5em;
    background-color: $color-white;
    padding: $space-xl $space-lg;
    border-top: 1px solid $color-disabled;
    font-size: 14px;
    color: $color-link;

    &__top {
        display: flex;
        flex-wrap: wrap;
        gap: $space-xl;
        justify-content: space-between;
        margin-bottom: $space-lg;
    }

    &__section {
        flex: 1;
        min-width: 200px;

        ul {
            list-style: none;
            padding: 0;

            li {
                margin-bottom: $space-xs;

                a {
                    text-decoration: none;
                    color: $color-link;

                    &:hover {
                        color: $color-primary;
                    }
                }
            }
        }

        p {
            margin-bottom: $space-sm;
        }
    }

    &__brand {
        margin-bottom: $space-md;
        margin-top: $space-md;
    }

    &__logo {
        height: 32px;
    }

    &__links {
        display: flex;
        gap: $space-xl;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                margin-bottom: $space-xs;

                a {
                    text-decoration: none;
                    color: $color-link;

                    &:hover {
                        color: $color-primary;
                    }
                }
            }
        }

        @media (max-width: 480px) {
            flex-direction: column;
        }
    }

    &__heading {
        font-size: $font-body;
        font-weight: bold;
        margin-bottom: $space-sm;
        color: $color-primary;

        &-subtitle {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        &-address {
            padding-left: 30px;
            margin: 0;
        }
    }

    &__socials {
        display: flex;
        gap: $space-sm;

        img {
            height: 20px;
            width: 20px;
            border: 1px solid $color-primary;
            border-radius: 50%;
            padding: 8px;
            transition: background-color 0.2s;

            &:hover {
                background-color: $color-primary-30;
                cursor: pointer;
            }
        }
    }

    &__bottom {
        border-top: 1px solid $color-disabled;
        padding-top: $space-md;
        font-size: 12px;
        text-align: center;
        line-height: 1.5;
        color: $color-link;
    }
}
</style>
