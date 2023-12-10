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
                    link: 'Contacts',
                    link_name: 'contacts'
                }
            ]
        }
    }
}

</script>

<template>
    <nav v-if="$route.name != 'not-found'" class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                A Juwelier
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="link in navLinks" class="nav-item">
                        <router-link :to="{ name: link.link_name }" class="nav-link"
                        :class="$route.name == link.link_name ? 'active' : ''">
                            {{ link.link }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>