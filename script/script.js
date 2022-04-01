const course = [
	{
		id: 0,
		name: "course 1",
		image: "image/course1.png",
		info: "Это краткий курс про что-то и он что-то рассказывает",
		themes: [
			{
				id: 0,
				name: "Тема 1 - арифметика",
				info: "информация про 1 тему",
				bigInfo: "Большая тема в которую описывается вся история и весь курс",
				video: "https://www.youtube.com/watch?v=2ul2m8O1jhI&ab_channel=%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9%D0%BA%D0%BB%D1%83%D0%B1",
				test: [
					{
						id: 0,
						name: "Тест 1",
						question: "Сколько будет 2+2",
						answers: [
							{
								id: "no",
								answer: "1",
							},
							{
								id: "yes",
								answer: "4",
							},
							{
								id: "no",
								answer: "22",
							},
							{
								id: "no",
								answer: "4.1",
							},
						]
					},
					{
						id: 1,
						name: "Тест 2",
						question: "Сколько будет 10-4",
						answers: [
							{
								id: "no",
								answer: "3",
							},
							{
								id: "no",
								answer: "5",
							},
							{
								id: "no",
								answer: "7",
							},
							{
								id: "yes",
								answer: "6",
							},
						]
					},
				]
			},
			{
				id: 1,
				name: "тема 2",
				info: "информация про 2 тему",
				bigInfo: "Большая тема в которую описывается вся история и весь курс",
				video: "url",
				test: [
					{
						id: 0,
						name: "тема 2 Тест 1",
						question: "Какой-то вопрос, о чем-то спрашивает",
						answers: [
							{
								id: "no",
								answer: "Ответ 1 - не правильный",
							},
							{
								id: "yes",
								answer: "Ответ 2 - правильный",
							},
							{
								id: "no",
								answer: "Ответ 3 - не правильный",
							},
							{
								id: "no",
								answer: "Ответ 4 - не правильный",
							},
						]
					},
					{
						id: 1,
						name: "Тест 2",
						question: "Какой-то вопрос, о чем-то спрашивает",
						answers: [
							{
								id: "no",
								answer: "Ответ 1 - не правильный",
							},
							{
								id: "no",
								answer: "Ответ 2 - не правильный",
							},
							{
								id: "no",
								answer: "Ответ 3 - не правильный",
							},
							{
								id: "yes",
								answer: "Ответ 4 - правильный",
							},
						]
					},
					{
						id: 2,
						name: "Тест 3",
						question: "Какой-то вопрос, о чем-то спрашивает",
						answers: [
							{
								id: "yes",
								answer: "Ответ 1 - правильный",
							},
							{
								id: "no",
								answer: "Ответ 2 - не правильный",
							},
							{
								id: "no",
								answer: "Ответ 3 - не правильный",
							},
							{
								id: "no",
								answer: "Ответ 4 - не правильный",
							},
						]
					},
				]
			},
		]
	},
]

//----------------------------------------------------------------------------------------------------//

const courseId = 0;//курс со всем всем

// создаем сам курс, можно менять
function makeCourse(course) {

	//поиск тела сайта
	const body = document.querySelector("body")

	//создаем контейнер
	const containerDiv = document.createElement("div")
	containerDiv.className = "container"
	containerDiv.setAttribute("id", course[courseId].id)
	body.append(containerDiv)

	// создаем верхний блок для информации о курсе
	const headerDiv = document.createElement("div")
	headerDiv.className = "container__header"
	containerDiv.append(headerDiv)

	// создаем картинку для курса
	const imageDiv = document.createElement("div")
	imageDiv.className = "header__image"

	const image = document.createElement("img")
	image.setAttribute("src", course[courseId].image)
	image.setAttribute("alt", "картинка курса")
	imageDiv.append(image)
	headerDiv.append(imageDiv)

	//создаем краткую информацию о курсе
	const infoDiv = document.createElement("div")
	infoDiv.className = "header__right-info"
	headerDiv.append(infoDiv)

	const title = document.createElement("div")
	title.className = "title"
	title.innerHTML = `<h4>${course[courseId].name}</h4>`
	infoDiv.append(title)

	const info = document.createElement("div")
	info.className = "info"
	info.innerHTML = `<p>${course[courseId].info}</p>`
	infoDiv.append(info)

	makeTest(0)
}

// создаем сам тест вытягивая с курса
function makeTest(themesId) {

	const containerDiv = document.querySelector(".container")

	const containerTestDiv = document.createElement("div")
	containerTestDiv.className = "container__test"
	containerDiv.append(containerTestDiv)

	for (let j = 0; j < course[courseId].themes[themesId].test.length; j++) {

		//поле для теста
		const testForm = document.createElement("form")
		testForm.className = "test"
		containerTestDiv.append(testForm)

		testForm.innerHTML = `<h3>${course[courseId].themes[themesId].test[j].name}</h3> <h4>${course[courseId].themes[themesId].test[j].question}</h4>`

		for (let i = 0; i < course[courseId].themes[themesId].test[j].answers.length; i++) {
			const paragraph = document.createElement("p")
			testForm.append(paragraph)

			const inputAnswer = document.createElement("input")
			inputAnswer.setAttribute("type", "radio")
			inputAnswer.setAttribute("id", `contactChoice${i}`)
			inputAnswer.setAttribute("name", `contact${j}`)
			inputAnswer.setAttribute("value", `answer${i}`)
			inputAnswer.setAttribute("class", course[courseId].themes[themesId].test[j].answers[i].id)

			const labelAnswer = document.createElement("label")
			labelAnswer.setAttribute("for", `contactChoice${i}`)
			labelAnswer.innerHTML = `${course[courseId].themes[themesId].test[j].answers[i].answer}`

			paragraph.append(inputAnswer)
			paragraph.append(labelAnswer)
		}
	}

	const createButton = document.createElement("button")
	createButton.className = "button-submit"
	createButton.innerHTML = "Отправить"
	createButton.setAttribute("onclick", `remake(${themesId})`)
	containerDiv.append(createButton)
}

// запускаем функцию для загрузки сайта
makeCourse(course)

// меняем тест на следующий со следующей темы
function remake(themesId) {
	const containerDel = document.querySelector(".container__test")
	const buttonDel = document.querySelector(".button-submit")
	storeTest(themesId)

	if (course[courseId].themes[themesId + 1]) {
		makeTest(themesId + 1)
		buttonDel.remove()
		containerDel.remove()
	}

	else {
		buttonDel.remove()
		containerDel.remove()
		result(course, storeUser)
	}

}

//Проверка теста и запись в массив данные по тесту
var storeUser = [];
function storeTest(j) {

	storeUser[j] = []

	// поиск главных ответов, если они отмечены то круто - нет, плохо
	let searchForm = document.querySelectorAll(".yes")

	// записываем в матрицу значение всех тестов
	for (let i = 0; i < searchForm.length; i++) {
		if (searchForm[i].checked === true) {
			storeUser[j][i] = 1;
		}
		else {
			storeUser[j][i] = 0;
		}
	}
}


function result(course, storeUser) {
	const body = document.querySelector("body")

	const courseIdTest = document.querySelector(".container").id

	const resultDiv = document.createElement('div')
	resultDiv.className = "container__result"
	body.append(resultDiv)

	for (let i = 0; i < storeUser.length; i++) {
		const storeUserProc = storeUser[i].filter(store => store > 0);
		const procent = (100 / storeUser[i].length * storeUserProc.length).toFixed(2)
		const titleTheme = document.createElement('h1')
		titleTheme.innerHTML = `${course[courseIdTest].themes[i].name}, Количество правильных ответов ${procent}%`
		resultDiv.append(titleTheme)
		const recommendations = document.createElement("p")

		if (99 < procent) {
			recommendations.className = "green"
			recommendations.innerHTML = `<h2 class=green>Отличный результат на тему:${course[courseIdTest].themes[i].name}</h2>`
		}
		else if (70 < procent) {
			recommendations.className = "yellow"
			recommendations.innerHTML = `<h2 class=yellow>Не плохо прошли тему:${course[courseIdTest].themes[i].name}</h2>`
		}
		else if (40 < procent) {
			recommendations.className = "orange"
			recommendations.innerHTML = `<h2>Предлагаем повторно пройти тему:${course[courseIdTest].themes[i].name} - <a href=${course[courseIdTest].themes[i].video}>Видео на курс</a></h2>`
		}
		else {
			recommendations.className = "red"
			recommendations.innerHTML = `<h2 class=red>Очень важно выучить и начать с начала:${course[courseIdTest].themes[i].name} - <a href=${course[courseIdTest].themes[i].video}>Видео на курс</a></h2>`
		}

		resultDiv.append(recommendations)

	}



}
