<script>

export default {
    data() {
        return {
            watchesFieldList: [
                {
                    labelName: 'Brand',
                    options: null
                },
                {
                    labelName: 'Model',
                    options: null
                },
                {
                    labelName: 'Reference',
                    options: null
                },
                {
                    labelName: 'Movement',
                    options: null
                },
                {
                    labelName: 'Case material',
                    options: null
                },
                {
                    labelName: 'Strap/bracelet material',
                    options: null
                },
                {
                    labelName: 'Original strap/bracelet',
                    options: ['yes', 'no']
                },
                {
                    labelName: 'Original bracelet buckle/clasp',
                    options: ['yes', 'no']
                },
                {
                    labelName: 'Production year',
                    options: null
                },
                {
                    labelName: 'State of wear of the watch',
                    options: [
                        '0 (never worn)', 
                        '1 (excellent)',
                        '2 (good)',
                        '3 (second-hand)',
                        '4 (mediocre)',
                        '5 (replacement parts)'
                    ]
                },
                {
                    
                }
            ]
        }
    }
}

</script>

<template>
    <h1 class="text-center">Sell your watch</h1>

    <form class="w-75 m-auto">
        <fieldset class="row g-3">
            <legend class="col-12 m-0">Personal informations</legend>
            <div class="col-md-6 mt-1">
                <label for="inputName" class="form-label">Full Name:</label>
                <input type="text" class="form-control" id="inputName">
            </div>
            <div class="col-md-6 mt-1">
                <label for="inputEmail" class="form-label">E-mail Address:</label>
                <input type="email" class="form-control" id="inputEmail">
            </div>
            <div class="col-md-4">
                <label for="inputPhone" class="form-label">Phone Number:</label>
                <input type="tel" class="form-control" id="inputPhone">
            </div>
            <div class="col-md-4">
                <label for="inputCity" class="form-label">City:</label>
                <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="col-md-4">
                <label for="inputAddress" class="form-label">Address:</label>
                <input type="text" class="form-control" id="inputAddress">
            </div>
        </fieldset>

        <fieldset>
            <legend>Information about the watch</legend>

        </fieldset>
    </form>
</template>

<style scoped>

* {
    font-family: 'Courier New', Courier, monospace;
}
</style>