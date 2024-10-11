<script lang="ts">
	import '../app.postcss';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<!-- Nav Bar -->
<NavBar />

<!-- Page Route Content -->
<div class="w-full flex flex-row items-start justify-center mt-16 pt-32 pb-16">
  <div class="w-full max-w-5xl flex flex-col justify-start gap-8">
    <slot />
  </div>
</div>
