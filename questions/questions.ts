import {
  createQuestionElement,
  fetchQuestions,
  fetchTags,
  fetchUsers,
  type User,
} from '../utils'

const questionsContainer = document.querySelector('.space-y-4') as Element

const [questions, { tags }, users] = await Promise.all([
  fetchQuestions(),
  fetchTags(),
  fetchUsers(),
])

questions.forEach((question) => {
  const questionTags = tags.filter((tag) => question.tagIds.includes(tag.id))
  const user = users.find((user) => user.id === question.userId) as User

  const questionElement = createQuestionElement(question, questionTags, user)

  questionsContainer.appendChild(questionElement)
})

// window.history.pushState('', '', `/questions/5/${titleStringer}`)
// console.log(currUser = users.filter((user) => currQuestion.tagIds.includes(tag.id)))
