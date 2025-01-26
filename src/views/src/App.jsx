import { useEffect } from 'react'

function App() {
  useEffect(() => {
    chrome.storage.local.get('token', (result) => {
      if (result.token) {
        const token = result.token
        const tokenParser = token.replace(/"/g, '')
        console.log(tokenParser)
      
      } else {
        console.log(false)
      }
    })
  })
  return (
    <>
    <h1>HELL WORLD</h1>
    </>
  )
}

export default App
