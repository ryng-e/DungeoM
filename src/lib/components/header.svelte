<script lang="ts">
    let login: number = $state(0);

    function increment() {
        login+=1;
    }

</script>

<div class="flex h-[30vh] items-center">
    <div class="w-[20vw]"></div>
    <div class="w-[30vw] justify-start">
        <a href="/"><h1 class="h1 font-bold">DungeoM</h1></a>
    </div>
    <div class="flex w-[30vw] justify-end">
        <!-- non loggato -->
            <a href="/login">
                <button type="button" class="btn btn-lg preset-filled-primary-500">Login</button>
            </a>
            <button type="button" class="btn btn-lg preset-filled-primary-500" onclick={increment}>{login}</button>
        <!-- loggato -->
    </div>
    <div class="w-[20vw]"></div>
</div>