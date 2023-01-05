import React, {useState} from 'react'
import WordTypes from './WordTypes/WordTypes'
import WordsPage from './WordsPage/WordsPage'
import './FinalPage.css'
const FinalPage = () => {
    const [activeTab, setactiveTab] = useState('All')
  return (
    <div className='finalPage'>
        <WordTypes  
        activeTab={activeTab}
        setactiveTab={setactiveTab} />
        <WordsPage 
        activeTab={activeTab}
        />
    </div>
  )
}

export default FinalPage