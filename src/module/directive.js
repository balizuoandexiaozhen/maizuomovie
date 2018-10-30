import Vue from 'vue'

Vue.directive("scroll",(el,binding) => {
    var dis = el.getAttribute("dis")
    window.addEventListener("scroll", () => {
        var st = document.documentElement.scrollTop || document.body.scrollTop;
        if(st>dis) {
            binding.value.flag = true;
            // console.log(binding)
        } else {
            binding.value.flag = false;
        }
    })
})

Vue.directive("gotop",(el,binding) => {
    window.addEventListener("click", () => {
        document.documentElement.scrollTop = document.body.scrollTop  = 0;
    })
})