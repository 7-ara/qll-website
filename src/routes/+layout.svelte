<script lang="ts">
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
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
  import { FaSolidPeopleGroup } from 'svelte-icons-pack/fa';
  import { FaSolidCalendar } from 'svelte-icons-pack/fa';
  import { FaSolidNewspaper } from 'svelte-icons-pack/fa';
  import { FaSolidInfo } from 'svelte-icons-pack/fa';
  import { FaSolidTrophy } from 'svelte-icons-pack/fa';
  import { FaSolidFileLines } from 'svelte-icons-pack/fa';
  import { FaSolidHandshakeSimple } from 'svelte-icons-pack/fa';
  import { FaSolidPenToSquare } from 'svelte-icons-pack/fa';
  import { FaSolidChartSimple } from 'svelte-icons-pack/fa';
  import { FaSolidBuilding } from 'svelte-icons-pack/fa';
  import { FaSolidHouse } from 'svelte-icons-pack/fa';

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

  import { page } from '$app/stores';
</script>

<Drawer class="mt-16" rounded="rounded-none" width="w-full" >
  <AppRail width="w-24">
    <svelte:fragment slot="lead">
      <AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
        <svelte:fragment slot="lead">
          <Icon src={FaSolidHouse} size="24"/>
        </svelte:fragment>
        <span>Home</span>
      </AppRailAnchor>
    </svelte:fragment>
    <!-- --- -->
    <AppRailAnchor href="/about" selected={$page.url.pathname === '/about'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidInfo} size="24"/>
      </svelte:fragment>
      <span>About</span>
    </AppRailAnchor>
    <AppRailAnchor href="/news" selected={$page.url.pathname === '/news'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidNewspaper} size="24"/>
      </svelte:fragment>
      <span>News</span>
    </AppRailAnchor>
    <AppRailAnchor href="/schedule" selected={$page.url.pathname === '/schedule'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidCalendar} size="24"/>
      </svelte:fragment>
      <span>Schedule</span>
    </AppRailAnchor>
    <AppRailAnchor href="/competitions" selected={$page.url.pathname === '/competitions'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidTrophy} size="24"/>
      </svelte:fragment>
      <span>Competitions</span>
    </AppRailAnchor>
    <AppRailAnchor href="/matches" selected={$page.url.pathname === '/matches'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidHandshakeSimple} size="24"/>
      </svelte:fragment>
      <span>Matches</span>
    </AppRailAnchor>
    <AppRailAnchor href="/quizzes" selected={$page.url.pathname === '/quizzes'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidFileLines} size="24"/>
      </svelte:fragment>
      <span>Quizzes</span>
    </AppRailAnchor>
    <AppRailAnchor href="/scorer" selected={$page.url.pathname === '/scorer'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidPenToSquare} size="24"/>
      </svelte:fragment>
      <span>Scorer</span>
    </AppRailAnchor>
    <AppRailAnchor href="/teams" selected={$page.url.pathname === '/teams'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidPeopleGroup} size="24"/>
      </svelte:fragment>
      <span>Teams</span>
    </AppRailAnchor>
    <AppRailAnchor href="/players" selected={$page.url.pathname === '/players'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidUser} size="24"/>
      </svelte:fragment>
      <span>Players</span>
    </AppRailAnchor>
    <AppRailAnchor href="/venues" selected={$page.url.pathname === '/venues'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidBuilding} size="24"/>
      </svelte:fragment>
      <span>Venues</span>
    </AppRailAnchor>
    <AppRailAnchor href="/stats" selected={$page.url.pathname === '/stats'}>
      <svelte:fragment slot="lead">
        <Icon src={FaSolidChartSimple} size="24"/>
      </svelte:fragment>
      <span>Stats</span>
    </AppRailAnchor>
</AppRail>
</Drawer>

<!-- App Bar -->
<AppBar
  slotTrail="place-content-end"
  padding="p-0"
  background="bg-none"
  class="fixed h-16 w-full z-30"
>
  <svelte:fragment slot="lead">
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
    <a class="h-16 btn-md hover:variant-soft-primary" href="/">
      <img src="/logos/logo.png" class="h-10 block sm:hidden dark:hidden" alt="QLL Logo" />
      <img src="/logos/text-logo.png" class="h-10 hidden sm:block dark:hidden" alt="QLL Logo" />
      <img src="/logos/alt-logo.png" class="h-10 hidden dark:block dark:sm:hidden" alt="QLL Logo" />
      <img src="/logos/alt-text-logo.png" class="h-10 hidden dark:sm:block" alt="QLL Logo" />
    </a>
  </svelte:fragment>
  <div class="flex flex-row">
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/about">About</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/news">News</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/schedule">Schedule</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/competitions">Competitions</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/matches">Matches</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/quizzes">Quizzes</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/scorer">Scorer</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/teams">Teams</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/players">Players</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/venues">Venues</a>
    <a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/stats">Stats</a>
  </div>
  <svelte:fragment slot="trail">
    <div class="flex flex-row items-center p-2 gap-2">
      <LightSwitch />
      <a class="flex flex-row items-center btn btn-md hover:variant-soft-primary" href="/">
        <Icon src={FaSolidUser} />
        <span>Log in</span>
      </a>
    </div>
  </svelte:fragment>
</AppBar>

<!-- Page Route Content -->
<slot />
