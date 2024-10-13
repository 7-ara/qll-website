<script lang="ts">
  // Icons
  import { Icon } from 'svelte-icons-pack';
  import { FaSolidBuilding } from 'svelte-icons-pack/fa';
  import { FaSolidClock } from 'svelte-icons-pack/fa';

  export let competitionId: string;
  export let competition: string;
  export let division: string;
  export let round: string;
  export let venueId: string;
  export let venue: string;
  export let date: string;
  export let time: string;
  export let homeTeamId: string;
  export let awayTeamId: string;
  export let homeTeam: string;
  export let awayTeam: string;
  export const reader: string = '';
  export const scorer: string = '';
  export const homePlayers: string = ',,,';
  export const homeCaptain: string = '0';
  export const awayPlayers: string = ',,,';
  export const awayCaptain: string = '0';
  export const homeStartScore: string = '0';
  export const awayStartScore: string = '0';
  export const homeScore: string = '';
  export const awayScore: string = '';
  export const homePlayers2s: string = '0,0,0,0';
  export const awayPlayers2s: string = '0,0,0,0';
  export const homePlayers1s: string = '0,0,0,0';
  export const awayPlayers1s: string = '0,0,0,0';
  export const homeRoundHouse: string = 'false';
  export const awayRoundHouse: string = 'false';
  export const homeTeamFirst: string = 'false';
  export const homeResult: string = '';
  export const awayResult: string = '';
</script>

<div class="w-full card p-4">
	<header class="card-header grid grid-rows-2 h4 justify-start gap-4">
    <div class="flex flex-row gap-2 justify-items-start">
      <div class="flex flex-row gap-2 align-baseline">
        <Icon src={FaSolidClock} class="h-4" /><span>{time}</span>
      </div>
      <a href={`/venues/${venueId}`} class="flex flex-row gap-2 align-baseline">
        <Icon src={FaSolidBuilding} class="h-4" /><span>{venue}</span>
      </a>

    </div>
    <div class="w-full">
      <a href={`/teams/${homeTeamId}`}>{homeTeam}</a>
      {#if homeScore === '' || awayScore === ''}
        <span>vs</span>
      {:else if homeTeamFirst}
        <span>
          <strong>{homeScore}{(homeRoundHouse === 'true')? '*' : ''}</strong>
          -
          {awayScore}{(awayRoundHouse === 'true')? '*' : ''}
        </span>
      {:else}
        <span>
          {homeScore}{(homeRoundHouse === 'true')? '*' : ''}
          -
          <strong>{awayScore}{(awayRoundHouse === 'true')? '*' : ''}</strong>
        </span>
      {/if}
      <a href={`/teams/${awayTeamId}`}>{awayTeam}</a>
    </div>
  </header>
	<section class="p-4">
  </section>
	<footer class="card-footer">
    <a href={`/competitions/${competitionId}`}>{competition}</a>
    <span>{division}</span>
    <span>{round}</span>
  </footer>
</div>


