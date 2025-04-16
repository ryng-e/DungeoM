<script lang="ts">
    import "$lib/styles/auth.css"
    import { goto } from '$app/navigation';
    import { login, logWithGoogle } from '$lib/firebase/auth';

    let email = '';
    let password = '';
    let error: string | null = null;

    async function handleLogin() {
        try {
            await login(email, password);
            goto('/home');
        } catch (err) {
            error = 'LOGIN FAILED!';
            console.error(err);
        }
    }

    async function handleLogWithGoogle() {
        try {
            await logWithGoogle();
            goto('/home');
        } catch(err) {
            error = error = 'LOGIN FAILED!';
            console.error(err);
        }
    }
</script>

<div class="outerBox">
    
    <div class="titleBox">
        <h1 class="title">DungeoM</h1>
    </div>

    <div class="spaceBox"></div>
    
    <form on:submit|preventDefault={handleLogin}>
        <div class="inputBox">
            <input type="email" placeholder="Email" bind:value={email} required>
        </div>
    
        <div class="inputBox">
            <input type="password" placeholder="Password" bind:value={password} required>
        </div>

        <div class="errorBox">
            {#if error}
            <p class="error">{error}</p>
            {/if}
        </div>
    
        <div class="multipleButtonBox">
            <button type="submit">LOGIN</button>
            <button type="button" on:click={handleLogWithGoogle}>w/GOOGLE</button>
        </div>
    </form>

    <div class="help">
        <p class="helpText">Don't have an account? <a href="/register">Sign Up</a></p>
    </div>

</div>