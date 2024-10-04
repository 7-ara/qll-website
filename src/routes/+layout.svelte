<script lang="ts">
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
  import { LightSwitch } from '@skeletonlabs/skeleton';
						

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  // Icons
  import { Icon } from 'svelte-icons-pack';
  import { FaSolidBars } from "svelte-icons-pack/fa";
  import { FaSolidXmark } from "svelte-icons-pack/fa";
  import { FaSolidUser } from "svelte-icons-pack/fa";

  var menuIsOpen: boolean = false;
  function toggleMenu(): null {
    menuIsOpen = !menuIsOpen;
  }
</script>

		<!-- App Bar -->
		<AppBar
      slotTrail="place-content-end"
      padding="p-0"
      background="bg-none"
      class="fixed h-16 w-full z-50"
    >
			<svelte:fragment slot="lead">
        <a class="flex flex-row gap-2 items-center h-16 btn-lg hover:variant-soft-primary" href="/">
          <img src="/logos/logo-with-text.png" class="h-10 block dark:hidden" alt="QLL Logo" />
          <img src="/logos/alt-logo-with-text.png" class="h-10 hidden dark:block" alt="QLL Logo" />
        </a>
      </svelte:fragment>
      <div class="flex flex-row">
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">About</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">News</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Schedule</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Fixtures & Results</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Competitions & Events</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Teams</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Players</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Venues</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Quizzes</a>
				<a class="btn btn-sm hidden xl:inline-flex hover:variant-soft-primary" href="/">Scorer</a>
      </div>
      <svelte:fragment slot="trail">
				<a class="flex flex-row items-center btn btn-md hover:variant-soft-primary" href="/">
          <Icon src={FaSolidUser} />
          <span>Log in</span>
        </a>
        <LightSwitch />
				<button
          type="button"
          class="btn-lg hover:variant-soft-primary h-16"
          on:click={toggleMenu}
        >
          {#if menuIsOpen}
          <Icon src={FaSolidXmark} />
          {:else}
          <Icon src={FaSolidBars} />
          {/if}
        </button>
      </svelte:fragment>
		</AppBar>
	<!-- Page Route Content -->
	<slot />
