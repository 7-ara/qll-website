<script lang="ts">
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
  import { LightSwitch } from '@skeletonlabs/skeleton';
	import { ListBox } from '@skeletonlabs/skeleton';
	import { ListBoxItem } from '@skeletonlabs/skeleton';

  // Drawer
  import { Drawer } from '@skeletonlabs/skeleton';
  import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
  import { initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { storePopup } from '@skeletonlabs/skeleton';

  // Icons
  import { Icon } from 'svelte-icons-pack';
  import { FaSolidBars } from 'svelte-icons-pack/fa';
  import { FaSolidXmark } from 'svelte-icons-pack/fa';
  import { FaSolidUser } from 'svelte-icons-pack/fa';

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  initializeStores();
  const drawerStore = getDrawerStore();
  const drawerSettings: DrawerSettings = {
    id: 'side-menu',
  };

  var drawerIsOpen: boolean = false;
  function toggleDrawer(): null {
    if (drawerIsOpen) {
      drawerStore.close();
    } else {
      drawerStore.open(drawerSettings);
    }
    drawerIsOpen = !drawerIsOpen;
  }
</script>

<Drawer class="mt-16" rounded="rounded-none" width="w-full"/>

<!-- App Bar -->
<AppBar
  slotTrail="place-content-end"
  padding="p-0"
  background="bg-none"
  class="fixed h-16 w-full z-30"
>
  <svelte:fragment slot="lead">
    <a class="h-16 btn-md hover:variant-soft-primary px-2" href="/">
      <img src="/logos/logo-initials.png" class="h-10 block sm:hidden dark:hidden" alt="QLL Logo" />
      <img src="/logos/logo-with-text.png" class="h-10 hidden sm:block dark:hidden" alt="QLL Logo" />
      <img src="/logos/alt-logo-initials.png" class="h-10 hidden dark:block dark:sm:hidden" alt="QLL Logo" />
      <img src="/logos/alt-logo-with-text.png" class="h-10 hidden dark:sm:block" alt="QLL Logo" />
    </a>
  </svelte:fragment>
  <div class="flex flex-row">
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">About</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">News</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Schedule</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Fixtures & Results</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Competitions & Events</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Quizzes</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Scorer</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Teams & Players</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Venues</a>
  </div>
  <svelte:fragment slot="trail">
    <LightSwitch />
    <a class="flex flex-row items-center btn btn-md hover:variant-soft-primary" href="/">
      <Icon src={FaSolidUser} />
      <span>Log in</span>
    </a>
    <button
      type="button"
      class="btn-lg hover:variant-soft-primary h-16 xl:hidden"
      on:click={toggleDrawer}
    >
      {#if drawerIsOpen}
        <Icon src={FaSolidXmark} />
      {:else}
        <Icon src={FaSolidBars} />
      {/if}
    </button>
  </svelte:fragment>
</AppBar>

<!-- Page Route Content -->
<slot />
