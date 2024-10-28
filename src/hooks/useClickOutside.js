import { onMount, onDestroy } from 'svelte';

export function useClickOutside(callback) {
  const handleClickOutside = (event) => {
    if (event.target.closest('.dropdown-wrapper') === null) {
      callback();
    }
  };

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
  });
}
