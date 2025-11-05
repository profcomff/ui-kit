<script setup lang="ts"></script>

<template>
	<main class="container mt-8">
		<h1>Это репозиторий UI-kit Viribus Unitis</h1>
		<p class="mt-4">
			Здесь мы разрабатываем компоненты, общие для интерфейсов
			<a href="https://app.profcomff.com" target="_blank">Твой ФФ</a> и всех
			<a href="https://app.profcomff.com/apps" target="_blank">миниприложений</a>. База компонентов и стилей
			берется из <a href="https://vuetifyjs.com/en/components/all/" target="_blank">Vuetify</a>, а дизайн-система
			описана в нашей
			<a
				href="https://www.figma.com/design/gfvuDN9x7I7sFCJQ7b1bIz/%D0%A2%D0%B2%D0%BE%D0%B9-%D0%A4%D0%A4--%7C-Viribus?node-id=5399-18531&t=gqJoSlE0UHgEkayo-0"
				target="_blank"
				>Фигме</a
			>.
		</p>
		<p class="mt-2">
			В данном репозитории все немного отличается. Само приложение здесь может служить для отладки кода -- можешь
			добавить в App.vue свой компонент и посмотреть, как он работает. Сами компоненты и их документацию мы пишем
			в <a href="https://storybook.js.org/" target="_blank">Storybook</a> -- для локального запуска введи
			<code class="ml-1">pnpm sb</code>.
		</p>
	</main>
</template>

<style scoped>
.container {
	width: min(100%, 900px);
	margin: auto;
	height: 100%;
}
</style>
