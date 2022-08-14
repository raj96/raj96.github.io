<script lang="ts">
    let active_el: HTMLElement
    
    const ToggleActiveEl = (ev: Event) => {
        if(active_el !=  undefined) {
            active_el.classList.toggle("selected")
        }
        active_el = ev.target
        active_el.classList.toggle("selected")
    }

</script>

<nav class="navbar">
	<div class="nav-logo">
        RP
    </div>
	<div class="nav-content">
		<div on:click={ToggleActiveEl} class="nav-item"><a href="#home">Home</a></div>
		<div class="nav-item"><a href="#projects">Projects</a></div>
		<div class="nav-item"><a href="#intresets">Intresets</a></div>
		<div class="nav-item"><a href="#melikey">Contact Me</a></div>
	</div>
</nav>

<style>
    @tailwind components;

    .navbar {
        @apply flex bg-yellow-400;
    }

    .nav-logo {
        @apply text-4xl pl-2;
    }

    .nav-content {
        @apply w-full flex justify-evenly items-center transition-all;
    }

    .nav-content + a {
        @apply text-lg;
    }

    .selected {
        @apply border-b-4 border-b-black;
    }

</style>
