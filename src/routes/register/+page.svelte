<script lang="ts">
    import "$lib/styles/auth.css"
    import { goto } from '$app/navigation';
    import { register } from '$lib/firebase/auth';

    let email = '';
    let password = '';
    let confirmPassword = '';
    let error: string | null = null;

    async function handleRegister() {
        if (password !== confirmPassword) {
            error = 'PASSWORDS DO NOT MATCH!'
        } else { 
            try {
                await register(email, password);
                goto('/home');
            } catch (err) {
                error = 'REGISTRATION FAILED!';
                console.error(err);
            }
        }
    }
</script>

<div class="outerBox">
    
    <div class="titleBox" style="height: 42vh;">
        <h1>DungeoM</h1>
    </div>

    <div class="spaceBox"></div>
    
    <form on:submit|preventDefault={handleRegister}>
        <div class="inputBox">
            <input type="email" placeholder="Email" bind:value={email} required>
        </div>
    
        <div class="inputBox">
            <input type="password" placeholder="Password" bind:value={password} required>
        </div>
    
        <div class="inputBox">
            <input type="password" placeholder="Confirm Password" bind:value={confirmPassword} required>
        </div>
        
        <div class="errorBox">
            {#if error}
            <p class="error">{error}</p>
            {/if}
        </div>
    
        <div class="buttonBox">
            <button type="submit">REGISTER</button>
        </div>
    </form>
    
    <div class="help">
        <p>Already have an account? <a href="/login">Log In</a></p>
    </div>

</div>