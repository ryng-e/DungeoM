<script lang="ts">
    import "$lib/styles/auth.css";
    import { goto } from '$app/navigation';
  
    const navigateToHome = () => {
      goto('/home');
    };
</script>

<div class="outerBox">
    
    <div class="titleBox" style="height: 42vh;">
        <h1>DungeoM</h1>
    </div>

    <div class="spaceBox"></div>
    
    <div class="inputBox">
        <input type="text" placeholder="Username" style="width: 30vw">
    </div>

    <div class="inputBox">
        <input type="password" placeholder="Password" style="width: 30vw">
    </div>

    <div class="inputBox">
        <input type="password" placeholder="Confirm Password" style="width: 30vw">
    </div>

    <div class="buttonBox">
        <button on:click={navigateToHome}>REGISTER</button>
    </div>

    <div class="help">
        <p>Already have an account? <a href="/login">Log In</a></p>
    </div>

</div>