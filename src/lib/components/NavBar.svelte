<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
  import { LightSwitch } from '@skeletonlabs/skeleton';
  import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
  import { initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';
  import NavDrawer from '$lib/components/NavDrawer.svelte';

  // Icons
  import { Icon } from 'svelte-icons-pack';
  import { FaSolidBars } from 'svelte-icons-pack/fa';
  import { FaSolidXmark } from 'svelte-icons-pack/fa';
  import { FaSolidUser } from 'svelte-icons-pack/fa';

  // Floating UI for Popups
	import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  } from '@floating-ui/dom';
  import { popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { storePopup } from '@skeletonlabs/skeleton';

  initializeStores();
  const drawerStore = getDrawerStore();
  const drawerSettings: DrawerSettings = {
    id: 'nav-menu'
  };

  function toggleDrawer(): null {
    if ($drawerStore.open) {
      drawerStore.close();
    } else {
      drawerStore.open(drawerSettings);
    }
  }
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

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

<NavDrawer {links} />

<AppBar
  slotTrail="place-content-end"
  padding="p-0"
  background="bg-surface-50-900-token"
  class="fixed h-16 w-full z-40 left-0 top-0"
>
  <svelte:fragment slot="lead">
    <button
      type="button"
      class="btn-lg hover:variant-soft-primary h-16 xl:hidden"
      on:click={toggleDrawer}
    >
      {#if $drawerStore.open}
        <Icon src={FaSolidXmark} />
      {:else}
        <Icon src={FaSolidBars} />
      {/if}
    </button>
    <a class="h-16 btn-md hover:variant-soft-primary" href="/">
      <img
        src="/logos/logo.png"
        class="h-10 block sm:hidden dark:hidden"
        alt="QLL Logo"
      />
      <img
        src="/logos/text-logo.png"
        class="h-10 hidden sm:block dark:hidden"
        alt="QLL Logo - Quiz League of London"
      />
      <img
        src="/logos/logo2.png"
        class="h-10 hidden dark:block dark:sm:hidden"
        alt="QLL Logo"
      />
      <img
        src="/logos/text-logo2.png"
        class="h-10 hidden dark:sm:block"
        alt="QLL Logo - Quiz League of London"
      />
    </a>
  </svelte:fragment>
  <div class="flex flex-row">
    {#each links as link}
      <a
        class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary"
        href={link.href}>
          {link.label}
      </a>
    {/each}
  </div>
  <svelte:fragment slot="trail">
    <div class="flex flex-row items-center p-2 gap-2">
      <LightSwitch />
      <a
        class="flex flex-row items-center btn btn-md hover:variant-soft-primary"
        href="/login">
        <Icon src={FaSolidUser} />
        <span>Log in</span>
      </a>
    </div>
  </svelte:fragment>
</AppBar>
