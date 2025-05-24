<script lang="ts">
    import { goto } from '$app/navigation';
  
    const navigateToLogin = () => {
      goto('/login');
    };
</script>

<div style="height: 30vh; display: flex; flex-wrap: wrap; justify-content: space-around; align-items: center">
    <h1 style="font-size: clamp(4rem, 10vw, 6rem)">DungeoM</h1>
    <button on:click={navigateToLogin}>LOGIN</button>
</div>