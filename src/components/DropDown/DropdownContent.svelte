<script>
  import { KEY_BOARD_EVENT } from "../../constant";

  export let options = [];
  export let selectedIndex;
  export let onClick;

  let dropdownList;

  const onKeyDown = (event) => {
    switch (event.key) {
      case KEY_BOARD_EVENT.ARROW_DOWN:
        selectedIndex = (selectedIndex + 1) % options.length;
        break;
      case KEY_BOARD_EVENT.ARROW_UP:
        selectedIndex = (selectedIndex - 1 + options.length) % options.length;
        break;
      case KEY_BOARD_EVENT.ENTER:
        selectedIndex !== -1 && onClick(selectedIndex);
        break;
      default:
        break;
    }
  };

  $: if (dropdownList) {
    dropdownList.focus();
  }
</script>

<ul
  bind:this={dropdownList}
  class="absolute w-full border mt-2 bg-white outline-none z-10 h-auto rounded-lg dropdown"
  on:keydown={onKeyDown}
  role="listbox"
  tabindex="0"
>
  {#each options as option, index}
    <li
      class="font-medium cursor-pointer px-4 py-2 {selectedIndex === index
        ? 'bg-[#3476F4] text-white'
        : 'text-black hover:bg-gray-200'}"
      class:rounded-t-lg={index === 0}
      class:rounded-b-lg={options.length === index + 1}
      on:click={() => onClick(index)}
      on:keydown={(e) => e.key === "Enter" && onClick(index)}
      role="option"
      aria-selected={selectedIndex === index}
    >
      {option.label}
    </li>
  {/each}
</ul>

<style scoped type="scss">
  .dropdown {
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
</style>
