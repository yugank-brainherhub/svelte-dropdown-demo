<script>
  import Dropdown from "./components/DropDown/index.svelte";
  import { dropdownOptions, dropdownPlaceholder } from "./constant";
</script>

<main class="flex flex-row justify-center">
  <Dropdown options={dropdownOptions} placeholder={dropdownPlaceholder} />
</main>

<style>
</style>
