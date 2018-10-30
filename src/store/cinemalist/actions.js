import axios from 'axios'

export default {
    getcinemaList(context) {
        axios.get("/mz/v4/api/cinema",{
            params:{
                __t: new Date().getTime()
            }
        }).then((res) => {
            context.state.list = res.data.data.cinemas.sort((a,b) => {
                return a.district.pinyin[0].charCodeAt() - b.district.pinyin[0].charCodeAt()
            })
            console.log(context.state.list)
            
            var arr = [];
            context.state.list.forEach((item,index) => {
                arr.push(item.district.name)
            })
            context.state.district = [...new Set(arr)]
            console.log(context.state.district)
        }) 
    }
}

