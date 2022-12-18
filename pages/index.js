import { useState } from 'react'
import dynamic from 'next/dynamic'

export default function Home() {
  const BarcodeScannerComponent = dynamic(() => import('react-qr-barcode-scanner'), { ssr: false })

  const [data, setData] = useState('ここに表示')
  const [isOpened, setIsOpened] = useState(false)

  const openScanner = () => setIsOpened(true)
  const closeScanner = () => setIsOpened(false)

  return (
    <div>
      <h1>スキャン結果：{data}</h1>
      <button onClick={openScanner}>起動</button>
      <button onClick={closeScanner}>停止</button>
      {isOpened && (
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text)
            else setData('Not Found')
          }}
        />
      )}
    </div>
  )
}
