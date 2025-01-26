import { useEffect, useState } from 'react'
import { Button } from '@components'
import './index.css'
import { Toaster, toast } from 'react-hot-toast'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    chrome.storage.local.get('token', (result) => {
      if (result.token) {
        const token = result.token
        const tokenParser = token.replace(/"/g, '')
        setToken(tokenParser)
      } else {
        setToken(null)
      }
    })
  })

  function copyToken(){
    navigator.clipboard.writeText(token)
    .then(() => {
      
    })
    .catch((err) => {
      console.error("Kopyalama sırasında bir hata oluştu: ", err)
    })
  }


  return (
    <div className='flex flex-col items-center justify-center p-2 text-center'>
      <Toaster />
      <div className="w-[380px] h-full">
        <div className="mockup-browser border-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input border-base-300 border font-bold">Discord Token Watcher</div>
        </div>
          <div className='px-4 py-6'>
            {/* <h2 className='pt-3 text-2xl font-bold'>Discord Token Watcher</h2> */}
            <p className="text-sm break-words">
              {token ? `${token}` : 'No token found'}
            </p>
            <Button 
              text="Kopyala"
              styles="mt-4"
              handleClick={copyToken}
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
