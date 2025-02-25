<template lang="pug">
.search
  client-only
    div(ref="container")
    template(#placeholder)
      SkeletonItem.skeleton(
        animated
        type="rect"
      )
</template>

<script lang="ts">
import '@docsearch/css'

import { defineComponent } from 'vue'

const appId = '47GZKZVKVE'
const indexName = 'retejs'
const apiKey = 'ab7a7d6c6c64359b03362fbbcf3d5135'

export default defineComponent({
  watch: {
    '$i18n.locale': function () {
      void this.refresh()
    }
  },
  methods: {
    async refresh() {
      const t = (key: string) => this.$t(['docsearch', key].join('.'))

      const { default: docsearch } = await import('@docsearch/js')

      docsearch({
        container: this.$refs.container,
        appId,
        indexName,
        apiKey,
        searchParameters: {
          facetFilters: [`lang:${this.$i18n.locale}`]
        },
        placeholder: t('placeholder'),
        translations: {
          button: {
            buttonText: t('button.buttonText'),
            buttonAriaLabel: t('button.buttonAriaLabel')
          },
          modal: {
            searchBox: {
              resetButtonTitle: t('modal.searchBox.resetButtonTitle'),
              resetButtonAriaLabel: t('modal.searchBox.resetButtonAriaLabel'),
              cancelButtonText: t('modal.searchBox.cancelButtonText'),
              cancelButtonAriaLabel: t('modal.searchBox.cancelButtonAriaLabel')
            },
            startScreen: {
              recentSearchesTitle: t('modal.startScreen.recentSearchesTitle'),
              noRecentSearchesText: t('modal.startScreen.noRecentSearchesText'),
              saveRecentSearchButtonTitle: t('modal.startScreen.saveRecentSearchButtonTitle'),
              removeRecentSearchButtonTitle: t('modal.startScreen.removeRecentSearchButtonTitle'),
              favoriteSearchesTitle: t('modal.startScreen.favoriteSearchesTitle'),
              removeFavoriteSearchButtonTitle: t('modal.startScreen.removeFavoriteSearchButtonTitle')
            },
            errorScreen: {
              titleText: t('modal.errorScreen.titleText'),
              helpText: t('modal.errorScreen.helpText')
            },
            footer: {
              selectText: t('modal.footer.selectText'),
              selectKeyAriaLabel: t('modal.footer.selectKeyAriaLabel'),
              navigateText: t('modal.footer.navigateText'),
              navigateUpKeyAriaLabel: t('modal.footer.navigateUpKeyAriaLabel'),
              navigateDownKeyAriaLabel: t('modal.footer.navigateDownKeyAriaLabel'),
              closeText: t('modal.footer.closeText'),
              closeKeyAriaLabel: t('modal.footer.closeKeyAriaLabel'),
              searchByText: t('modal.footer.searchByText')
            },
            noResultsScreen: {
              noResultsText: t('modal.noResultsScreen.noResultsText'),
              suggestedQueryText: t('modal.noResultsScreen.suggestedQueryText'),
              reportMissingResultsText: t('modal.noResultsScreen.reportMissingResultsText'),
              reportMissingResultsLinkText: t('modal.noResultsScreen.reportMissingResultsLinkText')
            }
          }
        }
      })
    }
  },
  mounted() {
    void this.refresh()
  }
})
</script>

<style lang="sass">
:root
  --docsearch-primary-color: #ffd92c
  --docsearch-highlight-color: #8ba0ff

.search
  .skeleton
    width: 100%
    vertical-align: middle

.DocSearch-Button
  border: 1px solid #dcdee2
  border-radius: 4px
  background: white
  height: 32px
  display: inline-flex
  vertical-align: middle
  flex-direction: row-reverse
  width: 100%
  margin: 0

.DocSearch-Button-Keys
  transform: scale(0.7)
  transform-origin: 0

.DocSearch-Button-Placeholder
  display: none

.DocSearch-Search-Icon
  --docsearch-text-color: grey
  transform: scale(0.6)

</style>
