<script lang="ts">
    import "$lib/styles/auth.css"
    import { goto } from '$app/navigation';
  
    const navigateToHome = () => {
      goto('/home');
    };
</script>

<div class="outerBox">
    
    <div class="titleBox">
        <h1>DungeoM</h1>
    </div>

    <div class="spaceBox"></div>
    
    <div class="inputBox">
        <input type="text" placeholder="Username" style="width: 30vw">
    </div>

    <div class="inputBox">
        <input type="password" placeholder="Password" style="width: 30vw">
    </div>

    <div class="buttonBox">
        <button on:click={navigateToHome}>LOGIN</button>
    </div>

    <div class="help">
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>

</div>