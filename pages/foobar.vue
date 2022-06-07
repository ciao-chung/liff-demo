<template>
  <div>
    <h1 class="text-h2">foobar</h1>
    <div class="my-4 title font-weight-light">
      foobar
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  head() {
    return {
      title: this.vueMeta.title,
      meta: this.vueMeta.meta,
      script: this.vueMeta.script,
    }
  },
  data: () => ({
    vueMeta: {
      title: 'foobar',
      link: [],
      meta: [],
      script: [],
    },
  }),
  async fetch() {
    this.setupMeta()
  },
  methods: {
    setupMeta() {
      this.vueMeta.meta = this.$seo.getMetaArray({
        title: 'foobar',
        description: 'foobar page description',
        photo: {
          url: require('assets/images/sample.jpg'),
        },
      })
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>
