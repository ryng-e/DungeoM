<script lang="ts">

    import Title from "$lib/components/Title.svelte";

</script>

<div class="flex flex-col items-center justify-center w-screen h-screen">

    <Title />

    <div class="h-[10vh]"></div>

    <form>
        <input type="email" placeholder="Email" class="input text-[calc(9px+1.5vw)] w-[35vw]" required />
        <div class="h-[2.5vh]"></div>
        <input type="password" placeholder="Password" class="input text-[calc(9px+1.5vw)] w-[35vw]" required />
        <div class="h-[2.5vh]"></div>
        <input type="password" placeholder="Confirm Password" class="input text-[calc(9px+1.5vw)] w-[35vw]" required />
        <div class="h-[5vh]"></div>
        <button type="submit" class="btn btn-lg preset-filled-primary-500">REGISTER</button>
        <div class="h-[5vh]"></div>
        <p class="h-[5vh] text-[calc(10px+0.5vw)]">Already have an account? <a class="anchor" href="/login">Log In</a></p>
    </form>

</div>

