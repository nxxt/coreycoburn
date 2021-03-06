import Vue from 'vue'
import { mapGetters } from 'vuex'

const Layout = {
  install (Vue) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          pageName: 'layout/pageName'
        })
      }
    })
  }
}

Vue.use(Layout)
