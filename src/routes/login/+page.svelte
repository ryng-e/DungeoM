<script lang="ts">

    import Title from "$lib/components/Title.svelte";
    import { goto } from '$app/navigation';
    import { login, logWithGoogle } from '$lib/firebase/auth';
    import { type UserCredential } from "firebase/auth";

    let email = '';
    let password = '';
    let error: string | null = null;

    let user: UserCredential;

    async function handleLogin() {
        try {
            user = await login(email, password);
            console.log(user.user);
            goto('/');
        } catch (err) {
            error = "Something went wrong."
            console.error(err);
        }   
    }

    async function handleLogWithGoogle() {
        try {
            user = await logWithGoogle();
            goto('/');
        } catch(err) {
            error = error = 'Something went wrong.';
            console.error(err);
        }
    }

</script>

<div class="flex flex-col items-center justify-center w-screen h-screen">

    <Title />

    <div class="h-[10vh]"></div>

    <form class="flex flex-col items-center" on:submit|preventDefault={handleLogin}>
        <input type="email" placeholder="Email" class="input text-[calc(9px+1.5vw)] w-[40vw]" bind:value={email} required />
        <div class="h-[2.5vh]"></div>
        <input type="password" placeholder="Password" class="input text-[calc(9px+1.5vw)] w-[40vw]" bind:value={password} required />
        <div class="flex justify-center items-center h-[7.5vh] text-error-950">
            {#if error}
                <p>{error}</p>
            {/if}
        </div>
        <div class="flex justify-center">
            <button type="submit" class="btn btn-lg preset-filled-primary-500 text-[calc(9px+1vw)] w-[20vw]">LOGIN</button>
            <div class="w-[5vw]"></div>
            <button type="button" class="btn btn-lg preset-filled-primary-500 text-[calc(9px+1vw)] w-[20vw]" on:click={handleLogWithGoogle}>w/GOOGLE</button>
        </div>
        <div class="h-[5vh]"></div>
        <p class="h-[5vh]">Don't have an account? <a class="anchor" href="/register">Sign Up</a></p>
    </form>

</div>