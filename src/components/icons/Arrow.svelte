<script>
  export let isOpen = false;
</script>

<svg
  class="w-5 h-5 transform transition-transform duration-300 ease-in-out"
  class:rotate-180={isOpen}
  fill="none"
  stroke="#353535"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M19 9l-7 7-7-7"
  ></path>
</svg>
