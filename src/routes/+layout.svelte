<script lang="ts">
	import '../app.postcss';
	import NavBar from '$lib/components/NavBar.svelte';
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { ListBox } from '@skeletonlabs/skeleton';
	import { ListBoxItem } from '@skeletonlabs/skeleton';

  // Drawer
  import { Drawer } from '@skeletonlabs/skeleton';
  import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
  import { initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';

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

  initializeStores();
  const drawerStore = getDrawerStore();
  const drawerSettings: DrawerSettings = {
    id: 'side-menu'
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

<Drawer
  class="mt-16"
  rounded="rounded-none"
  width="w-full"
  bgDrawer="bg-surface-50-900-token"
>
  <AppRail width="w-24" background="bg-surface-50-900-token">
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

<!-- Nav Bar -->
<NavBar />

<!-- Page Route Content -->
<div class="w-full flex flex-row items-start justify-center mt-16 pt-32 pb-16">
  <div class="w-full max-w-5xl flex flex-col justify-start gap-8">
    <slot />
  </div>
</div>
