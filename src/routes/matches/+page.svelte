<script lang="ts">
  import ContentBox from '$lib/components/ContentBox.svelte';
	import CalendarRail from '$lib/components/CalendarRail.svelte';
  import MatchSummary from '$lib/components/MatchSummary.svelte';
  export let data;
  var chosenDate = new Date().toISOString().slice(0, 10);
</script>

<ContentBox>
  <h1 class="h1">Matches</h1>
  <CalendarRail bind:date={chosenDate}/> 
  {#each data.matches as match} 
    {#if match.date === chosenDate}
      <MatchSummary {match}/>
    {/if}
  {/each}
</ContentBox>
