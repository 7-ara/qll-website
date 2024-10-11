<script lang="ts">
  import { Drawer } from '@skeletonlabs/skeleton';

  export let links = [
    {label: 'About', href: '/about'},
    {label: 'News', href: '/news'},
    {label: 'Schedule', href: '/schedule'},
    {label: 'Matches', href: '/matches'},
    {label: 'Standings', href: '/standings'},
    {label: 'Competitions', href: '/competitions'},
    {label: 'Quizzes', href: '/quizzes'},
    {label: 'Teams', href: '/teams'},
    {label: 'Players', href: '/players'},
    {label: 'Venues', href: '/venues'},
    {label: 'Stats', href: '/stats'},
    {label: 'Scorer', href: '/scorer'},
  ]; 
</script>

<Drawer
  class="mt-16"
  rounded="rounded-none"
  width="w-full"
  height="h-fit"
  bgDrawer="bg-surface-50-900-token"
  position="top"
>
  <div class="p-4 flex flex-wrap justify-center gap-4">
    {#each links as link}
      <a
        class="btn btn-lg hover:variant-soft-primary"
        href={link.href}>
          {link.label}
      </a>
    {/each}
  </div>
</Drawer>
