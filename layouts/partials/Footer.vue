<template>
  <div class="bg-grey-light py-16">
    <footer class="container mx-auto text-center">
      <p class="mb-8 text-grey-darkest text-lg font-bold">
        Say 👋 @
        <a
          :href="`mailto:${me.email}`"
          class="text-grey-darkest"
        >
          {{ me.email }}
        </a>
      </p>

      <ul class="list-reset flex justify-center mb-4">
        <li
          v-animate-css.hover="'tada'"
          class="mr-4"
        >
          <a
            :href="social.twitter"
            class="border-0"
          >
            <Icon name="twitter" />
          </a>
        </li>

        <li
          v-animate-css.hover="'tada'"
          class="mr-4"
        >
          <a
            :href="social.github"
            class="border-0"
          >
            <Icon name="github" />
          </a>
        </li>

        <li v-animate-css.hover="'tada'">
          <a
            href="social.linkedin"
            class="border-0"
          >
            <Icon name="linkedin-in" />
          </a>
        </li>
      </ul>

      <p>&copy; {{ year }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { me, social } from '@/config/content'

export default {
  data () {
    return {
      me,
      social,
      year: new Date().getFullYear()
    }
  }
}
</script>
