<script>

export default {
    data() {
        return {
            navLinks: [
                {
                    link: 'Home',
                    link_name: 'home'
                },
                {
                    link: 'Watches',
                    link_name: 'watches'
                },
                {
                    link: 'Sell',
                    link_name: 'sell'
                },
                {
                    link: 'Contacts',
                    link_name: 'contacts'
                }
            ]
        }
    }
}

</script>

<template>
    <nav v-if="$route.name != 'not-found'" class="navbar navbar-expand-lg nav-bg-color">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                <img src="../assets/a-juwelier.jpg" style="width: 140px;" alt="a-juwelier-logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="link in navLinks" class="nav-item">
                        <router-link :to="{ name: link.link_name }" class="nav-link my-text"
                        :class="$route.name == link.link_name ? 'active' : ''"
                        v-bind:class="link.link == 'Home' ? 'notranslate' : ''">
                            {{ link.link }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

.nav-bg-color {
    background-color: #F4F3EF;
}
.my-text {
    font-family: 'Courier New', Courier, monospace;
}
</style>