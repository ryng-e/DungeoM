<script lang="ts">

    import { Avatar } from '@skeletonlabs/skeleton-svelte';
    import { UserRound } from 'lucide-svelte';

    let loggedIn: number = 0;

    function Log() {
        if(loggedIn == 0) {
            loggedIn = 1;
        } else {
            loggedIn = 0;
        }
    }

</script>

<div class="flex h-[20vh] justify-around items-center">
    <h1 class="h1 font-bold">DungeoM</h1>
    <div>
        {#if !loggedIn}
            <button type="button" class="btn btn-lg preset-filled-primary-500" on:click={Log}>Login</button>
        {:else}
            <button type="button" on:click={Log}>
                <Avatar name="Test Prova">
                    <UserRound />
                </Avatar>
            </button>
        {/if}
    </div>
</div>