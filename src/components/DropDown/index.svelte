<script>
  import DropDownWrapper from "./DropdownWrapper.svelte";
  import DropDownContent from "./DropdownContent.svelte";
  import { useClickOutside } from "../../hooks/useClickOutside";

  export let options = [];
  export let placeholder;
  export let isOpen = false;

  let selectedValue = null;
  let selectedIndex = -1;

  const toggleDropdown = () => (isOpen = !isOpen);

  const onClick = (index) => {
    selectedValue = options[index].value;
    selectedIndex = index;
    isOpen = false;
  };

  useClickOutside(() => (isOpen = false));
</script>

<div class="flex flex-row items-center h-screen sm:w-1/2 w-full sm:px-0 px-12">
  <DropDownWrapper {isOpen} {toggleDropdown} {selectedValue} {placeholder}>
    <DropDownContent {options} {selectedIndex} {onClick} />
  </DropDownWrapper>
</div>
