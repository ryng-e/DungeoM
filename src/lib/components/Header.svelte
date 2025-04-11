<script lang="ts">
    import { goto } from '$app/navigation';
  
    const navigateToLogin = () => {
      goto('/login');
    };
</script>

<header>
    <h1>
        <a href="/" class="invisibleLink">DungeoM</a>
    </h1>
    <button on:click={navigateToLogin}>LOGIN</button>
</header>