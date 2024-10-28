<script>
  import Arrow from "../icons/Arrow.svelte";

  export let isOpen;
  export let toggleDropdown;
  export let selectedValue;
  export let placeholder;

  let dropdownContent;

  // Focus dropdown content when dropdown is opened
  $: if (isOpen && dropdownContent) {
    dropdownContent.focus();
  }
</script>

<div class="w-full relative text-start dropdown-wrapper">
  <div
    on:click={toggleDropdown}
    on:keydown={(e) => e.key === "Enter" && toggleDropdown()}
    tabindex="0"
    class="w-full cursor-pointer px-4 py-2 flex justify-between items-center border-2 rounded-xl {!selectedValue ||
    isOpen
      ? 'border-[#0857CA]'
      : 'border-[#E4E4E4] hover:border-[#BFC0C5]'}"
    role="button"
  >
    <span
      class={selectedValue
        ? "font-bold text-black"
        : "font-semibold text-[#959799]"}>{selectedValue ?? placeholder}</span
    >
    <Arrow {isOpen} />
  </div>
  {#if isOpen}
    <div bind:this={dropdownContent}>
      <slot />
    </div>
  {/if}
</div>
