import { useState } from 'react'
import dynamic from 'next/dynamic'

export default function Home() {
  const BarcodeScannerComponent = dynamic(() => import('react-qr-barcode-scanner'), { ssr: false })

  const [data, setData] = useState('ここに表示')
  const [isOpened, setIsOpened] = useState(false)

  const openScanner = () => setIsOpened(true)
  const closeScanner = () => setIsOpened(false)

  return (
    <div className='p-5'>
      <h1 className='text-center text-3xl font-semibold'>スキャン結果：{data}</h1>
      <div className='flex justify-center mt-5'>
        <button
          onClick={openScanner}
          class='bg-green-600 hover:bg-green-500 text-white rounded px-4 py-2 mr-4'
        >
          起動
        </button>
        <button
          onClick={closeScanner}
          class='bg-gray-600 hover:bg-gray-500 text-white rounded px-4 py-2'
        >
          停止
        </button>
      </div>

      <div className='flex justify-center mt-5'>
        {isOpened && (
          <BarcodeScannerComponent
            width={800}
            height={800}
            onUpdate={(err, result) => {
              if (result) setData(result.text)
              else setData('Not Found')
            }}
          />
        )}
      </div>
    </div>
  )
}
