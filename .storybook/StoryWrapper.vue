<template>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap" rel="stylesheet" />
	<v-app>
		<v-main class="h-fit!">
			<slot name="story"></slot>
		</v-main>
	</v-app>
</template>

<style lang="css">
.v-application__wrap {
	min-height: 0vh !important;
}
</style>
