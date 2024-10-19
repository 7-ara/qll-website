<script lang="ts">
  // Icons
  import { Icon } from 'svelte-icons-pack';
  import { FaSolidBuilding } from 'svelte-icons-pack/fa';
  import { FaSolidClock } from 'svelte-icons-pack/fa';

  export let match: object = {};
</script>

<div class="w-full card p-4">
	<header class="card-header grid grid-rows-2 h4 justify-start gap-4">
    <div class="flex flex-row gap-2 justify-items-start">
      <div class="flex flex-row gap-2 align-baseline">
        <Icon src={FaSolidClock} class="h-4" /><span>{match.time}</span>
      </div>
      <a href={`/venues/${match.venue_id}`} class="flex flex-row gap-2 align-baseline">
        <Icon src={FaSolidBuilding} class="h-4" /><span>{match.venue}</span>
      </a>

    </div>
    <ul class="w-full list">
      {#each match.team_ids as team_id, team_num}
        <li>
          <span>-</span>
          <span class="flex-auto">
            <a href={`/teams/${team_id}`}>{match.teams[team_num]}</a>
          </span>
        </li>
      {/each}
    </ul>
  </header>
	<section class="p-4">
  </section>
	<footer class="card-footer">
    <a href={`/competitions/${match.competition_id}`}>{match.competition}</a>
    <span>{match.division}</span>
    <span>{match.round}</span>
  </footer>
</div>


