<script>

export default {

}

</script>

<template>

    <footer v-if="$route.name != 'not-found'" class="p-3">
        <p class="text-center text-light m-0 my-text my-font-footer">Follow us on</p>
        <div class="d-flex justify-content-center align-items-center gap-3 mb-3">
            <a class="text-light my-font-footer" href="https://www.instagram.com/ajuwelierluxury/?igsh=ZGNjOWZkYTE3MQ%3D%3D&utm_source=qr" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a class="text-light my-font-footer" href="https://www.tiktok.com/@a.juwelier?_t=8iXKFNjt4fh&_r=1" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
            <a class="text-light my-font-footer" href="https://x.com/ajuwelier59583?s=11" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
        <p class="text-center text-light m-0 my-text my-font-footer">©2024 A Juwelier | All Rights Reserved</p>
    </footer>

</template>

<style scoped>

footer {
    background-color: #212529;
}
footer a {
    text-decoration: none;
}
.my-text {
    font-family: 'Courier New', Courier, monospace;
}

@media screen and (max-width: 576px) {
    .my-font-footer {
        font-size: 12px;
    }
}
</style>