<script lang="ts">
  import { Drawer } from '@skeletonlabs/skeleton';

  export let links = []; 
</script>

<Drawer
  class="mt-16"
  rounded="rounded-none"
  width="w-full"
  height="h-fit"
  bgDrawer="bg-surface-50-900-token"
  position="top"
>
  <div class="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
    {#each links as link}
      <a
        class="btn btn-lg hover:variant-soft-primary"
        href={link.href}>
          {link.label}
      </a>
    {/each}
  </div>
</Drawer>
