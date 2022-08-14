<script lang="ts">
    import {slide} from "svelte/transition"
    let active_el: HTMLElement
    let navMenuVisible = false
    
    const ToggleActiveEl = (ev: Event) => {
        if(!ev.target.parentElement.classList.contains("nav-item")) {
            return
        }

        if(active_el !=  undefined) {
            active_el.classList.remove("selected")
        }
        active_el = ev.target
        active_el.classList.add("selected")
    }

</script>

<nav class="navbar">
	<div class="nav-logo">
        RP
    </div>
	<div on:click={ToggleActiveEl} class="nav-content">
		<div bind:this={active_el} class="nav-item selected"><a href="#home">Home</a></div>
		<div class="nav-item"><a href="#projects">Projects</a></div>
		<div class="nav-item"><a href="#intrests">Intrests</a></div>
		<div class="nav-item"><a href="#melikey">Contact Me</a></div>
	</div>
	<div class="nav-content-sm">
        <div class="nav-btn" on:click={()=>{navMenuVisible=!navMenuVisible}}>
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
        </div>
	</div>
</nav>
{#if navMenuVisible}
<div class="nav-menu" transition:slide={{duration: 500}}>
    <div class="nav-menu-item"><a href="#home">Home</a></div>
    <div class="nav-menu-item"><a href="#projects">Projects</a></div>
    <div class="nav-menu-item"><a href="#intrests">Intrests</a></div>
    <div class="nav-menu-item"><a href="#melikey">Contact Me</a></div>
</div>
{/if}

<style>
    @tailwind components;

    .navbar {
        @apply flex bg-yellow-400 items-center justify-between md:justify-start;
    }

    .nav-logo {
        @apply text-4xl p-1 m-2 select-none border-4 border-black;
    }

    .nav-content {
        @apply w-full hidden justify-evenly items-center transition-all md:flex;
    }

    .nav-item {
        @apply px-2 py-1 font-semibold;
    }

    .selected {
        @apply border-b-4 border-b-black;
    }

    .nav-content-sm {
        @apply md:hidden;
    }

    .nav-btn {
        @apply flex flex-col justify-evenly h-10 w-10 p-1 m-2 cursor-pointer;
    }

    .line-1, .line-2, .line-3 {
        @apply w-full h-1 bg-black;
    }

    .nav-menu {
        @apply w-full bg-yellow-400 flex flex-col items-center justify-evenly md:hidden;
    }

    .nav-menu-item {
        @apply font-semibold mb-2 text-lg;
    }

</style>
