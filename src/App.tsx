import { Button } from "./shared/ui/Button/Button"

function App() {


  // UI-kit -> Набор готовых компонентов интерфейса: кнопки, поля, карточки, модалки
  // Дизайн-токен -> Базовые значения: цвета, шрифты, отступы, радиусы и тени 
  // Дизайн-система -> Токены + Ui-kit + правила пользования + документация

  return (
    <>
    <Button size="lg">click me</Button>
    <Button variant="secondary" size="lg">click me</Button>
    <Button variant="danger" size="lg">click me</Button>
    <Button variant="ghost" size="lg">click me</Button>
    </>
  )
}

export default App
