<script lang="ts">
    import "$lib/styles/auth.css"
    import { goto } from '$app/navigation';
    import { login } from '$lib/firebase/auth';
    import { onMount } from 'svelte';

    let email = '';
    let password = '';
    let error: string | null = null;

    async function handleLogin() {
        try {
            await login(email, password);
            goto('/home');
        } catch (err) {
            error = 'Login fallito: controlla le credenziali.';
            console.error(err);
        }
    }

    const navigateToHome = () => {
      goto('/home');
    };
</script>

<div class="outerBox">
    
    <div class="titleBox">
        <h1>DungeoM</h1>
    </div>

    <div class="spaceBox"></div>
    
    <form on:submit|preventDefault={handleLogin}>
        <div class="inputBox">
            <input type="email" placeholder="Email" bind:value={email} required style="width: 35vw">
        </div>
    
        <div class="inputBox">
            <input type="password" placeholder="Password" bind:value={password} required style="width: 35vw">
        </div>

        {#if error}
        <p class="error">{error}</p>
        {/if}
    
        <div class="buttonBox">
            <button type="submit">LOGIN</button>
        </div>
    </form>

    <div class="help">
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>

</div>