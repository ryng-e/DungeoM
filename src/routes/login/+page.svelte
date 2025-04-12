<script lang="ts">
    import "$lib/styles/login.css"
    import { goto } from '$app/navigation';
  
    const navigateToHome = () => {
      goto('/home');
    };
</script>

<div style="display: flex; flex-direction: column; height:100vh; width: 100vw">
    <div style="display: flex; flex-direction: column; justify-content:center; align-items:center; height: 90vh; width: 100vw">
        <div style="display: flex; justify-content:center; align-items:flex-end; height: 50vh; width: 100vw">
            <h1 style="font-size: 10rem">DungeoM</h1>
        </div>
        <div style="display: flex; flex-direction: column; justify-content:center; align-items:center; height: 40vh; width: 100vw">
            <div style="display: flex; align-items: flex-end; height: 12.5vh;">
                <input type="text" placeholder="Username" style="width: 30vw">
            </div>  
            <div style="display: flex; align-items:flex-end; height: 8vh;">
                <input type="password" placeholder="Password" style="width: 30vw">
            </div>
            <div style="display: flex; justify-content:center; align-items:center; height: 25.5vh; width: 100vw">
                <button on:click={navigateToHome}>LOGIN</button>
            </div>
        </div>
    </div>

    <div style="display: flex; justify-content: center; align-items: center; height: 10vh; width: 100vw">
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
</div>