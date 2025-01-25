import './App.css'
// 2 - importando componente
import FirstComponent from './components/FirstComponent'

// 4 - template expression
import TemplateExpression from './components/TemplateExpression'

function App() {
// 3 - comentários
  return (
    <div className="App">
      {/* 3 - comentário JSX*/}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />

    </div>
  )
}

export default App
