<script lang="ts">

    import Header from "$lib/components/Header.svelte";
    import Game from "$lib/components/Game.svelte"

    let logged: boolean = true;

</script>

<Header />

{#if logged}
    <Game />
{:else}
    ciaociao
{/if}
