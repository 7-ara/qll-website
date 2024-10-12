<script lang="ts">
  function goToToday(): null {
    const today: Date = new Date();
    const dateInput = document.getElementById('match_date');
    dateInput.value = today.toISOString().slice(0,10);
  }
</script>

<div class="w-full flex flex-row items-center justify-center gap-4">
  <button class="btn btn-md variant-filled-primary" on:click={goToToday}>Today</button>
  <input class="input w-64" title="Match date" type="date" id="match_date"/>
</div>
