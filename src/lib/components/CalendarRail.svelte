<script lang="ts">
  var chosenDate: string = '';
  $: today = new Date().toISOString().slice(0, 10);
  $: chosenDateString = new Date(chosenDate).toDateString();
  const goToToday = () => { chosenDate = today; };
  goToToday();
</script>

<h2 class="h2 text-center">
  {chosenDateString}
</h2>

<div class="w-full grid grid-rows-2 gap-4 items-center justify-items-center">
  <input
    class="input w-40"
    title="Match date"
    type="date"
    bind:value={chosenDate}
    on:load={goToToday()}
  />
  {#if chosenDate === today}
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
