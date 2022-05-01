

import { Button } from '@aloha/ui'
import { useEffect } from 'react'
import { add, getDate } from '@aloha/util'

import './App.css'


function App() {

  // 这里会打印两次 是18严格模式的毒
  useEffect(() => {
    console.log(add(1, 2, 3))
    console.log(getDate())
  }, [])

  return (
    <div className="App">
      <h2>业务方</h2>
      <Button color="pink">突突突</Button>
    </div>
  )
}

export default App
