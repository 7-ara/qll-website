<script lang="ts">
  export let date: string = today;
  $: today = new Date().toISOString().slice(0, 10);
  $: dateString = new Date(date).toDateString();
  const goToToday = () => { date = today; };
  goToToday();
</script>

<h2 class="h2 text-center">
  {dateString}
</h2>

<div class="w-full grid grid-rows-2 gap-4 items-center justify-items-center">
  <input
    class="input w-40"
    title="Match date"
    type="date"
    bind:value={date}
    on:load={goToToday()}
  />
  {#if date === today}
    <span class="badge variant-filled">Today</span>
  {:else}
    <button
      class="btn btn-md w-40 variant-filled-primary"
      on:click={goToToday}
    >
      Go to today
    </button>
  {/if}
</div>
