<script lang="ts">
	// Import local datatable components
	import ThSort from '$lib/components/ThSort.svelte';
	import ThFilter from '$lib/components/ThFilter.svelte';
	import Search from '$lib/components/Search.svelte';
	import RowsPerPage from '$lib/components/RowsPerPage.svelte';
	import RowCount from '$lib/components/RowCount.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

  // Load local data
  import data from '$lib/data/data';

  // Import handler from SSD
  import { DataHandler } from '@vincjo/datatables';

  // Init data handler - CLIENT
  const handler = new DataHandler(data, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<div class=" overflow-x-auto space-y-2">
  <header class="flex justify-between gap-4">
    <Search {handler} />
    <RowsPerPage {handler} />
  </header>
  <table class="table table-hover table-compact table-auto w-full ">
    <thead>
      <tr>
        <ThSort {handler} orderBy="position">Rank</ThSort>
        <ThSort {handler} orderBy="previous_position">Prev</ThSort>
        <ThSort {handler} orderBy="team_name">Team</ThSort>
        <ThSort {handler} orderBy="games_played">P</ThSort>
        <ThSort {handler} orderBy="wins">W</ThSort>
        <ThSort {handler} orderBy="draws">D</ThSort>
        <ThSort {handler} orderBy="losses">L</ThSort>
        <ThSort {handler} orderBy="match_points_for">F</ThSort>
        <ThSort {handler} orderBy="match_points_against">A</ThSort>
        <ThSort {handler} orderBy="match_points_difference">F - A</ThSort>
        <ThSort {handler} orderBy="mean_match_points_for">F/P</ThSort>
        <ThSort {handler} orderBy="close_defeat_bonus_points">CB</ThSort>
        <ThSort {handler} orderBy="round_house_bonus_points">HB</ThSort>
        <ThSort {handler} orderBy="league_points">Pts</ThSort>
        <ThSort {handler} orderBy="form">Form</ThSort>
      </tr>
      <!--<tr>
        <ThFilter {handler} filterBy="position" />
        <ThFilter {handler} filterBy="previous_position" />
        <ThFilter {handler} filterBy="team_name" />
        <ThFilter {handler} filterBy="games_played" />
        <ThFilter {handler} filterBy="wins" />
        <ThFilter {handler} filterBy="draws" />
        <ThFilter {handler} filterBy="losses" />
        <ThFilter {handler} filterBy="match_points_for" />
        <ThFilter {handler} filterBy="match_points_against" />
        <ThFilter {handler} filterBy="match_points_difference" />
        <ThFilter {handler} filterBy="mean_match_points_for" />
        <ThFilter {handler} filterBy="close_defeat_bonus_points" />
        <ThFilter {handler} filterBy="round_house_bonus_points" />
        <ThFilter {handler} filterBy="league_points" />
        <ThFilter {handler} filterBy="form" />
      </tr>-->
    </thead>
    <tbody>
      {#each $rows as row}
        <tr>
          <td>{row.position}</td>
          <td>{row.previous_position}</td>
          <td>{row.team_name}</td>
          <td>{row.games_played}</td>
          <td>{row.wins}</td>
          <td>{row.draws}</td>
          <td>{row.losses}</td>
          <td>{row.match_points_for}</td>
          <td>{row.match_points_against}</td>
          <td>{row.match_points_difference}</td>
          <td>{row.mean_match_points_for}</td>
          <td>{row.close_defeat_bonus_points}</td>
          <td>{row.round_house_bonus_points}</td>
          <td>{row.league_points}</td>
          <td>{row.form}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <footer class="flex justify-between">
    <RowCount {handler} />
    <Pagination {handler} />
  </footer>
</div>
