export default {
  data: () => ({
  }),
  computed: {
    menu() {
      const menu = [
        {
          label: 'Home',
          route: {
            name: 'home',
          },
        },
        {
          label: 'foobar',
          route: {
            name: 'foobar',
          },
        },
      ]

      return menu
    },
    isNavFixTop() {
      return this.$store.getters['base/isNavFixTop']
    },
    textClass() {
      if(this.mutantNav == true && this.isNavFixTop) {
        return 'white--text'
      }
      return 'grey--text'
    },
    mutantNav() {
      return this.$route.meta.mutantNav === true
    },
  },
}
