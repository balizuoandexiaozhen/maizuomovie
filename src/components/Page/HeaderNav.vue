<template>
    <div>
        <MyHeader :toggle="toggle" :flag="flag"/>
        <Nav :toggle="toggle" :flag="flag"/>
    </div>
</template>
<script>
import MyHeader from './MyHeader'
import Nav from './Nav'
export default {
    data() {
        return {
            flag: false
        }
    },
    components: {
        MyHeader,Nav
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    }
}
</script>
