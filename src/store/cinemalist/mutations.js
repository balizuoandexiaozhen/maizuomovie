export default {
    changecinemaflag(state,item) {
        state.changecinemaobj[item].flag = !state.changecinemaobj[item].flag
        state.$forceUpdate();
    }
}