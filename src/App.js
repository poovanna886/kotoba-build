
import './App.css';
import React, { useState } from 'react';
import AddWords from './Components/AddWords/AddWords';
import Header from './Components/Header/Header';
import WordsPage from './Components/WordsPage/WordsPage';
import WordTypes from './Components/WordTypes/WordTypes';
import words from './assets/data';

function App() {
  //const activeTab = 'All';
   const [activeTab, setactiveTab] = useState('All')

  const [appendWords, setAppendWords] = useState(words)
   //const [newWord , setNewWord] = useState({})
//   words = words.pop()
//  // words = words.map((word , index) => (word === {} ? words[index].pop(): null ));
  console.log('In app js')
  //console.log(activeTab)
  //console.log(words)
//   words.pop()
  return (
    <div className="App">
    <Header />
    <div className='app-body'>
     <WordTypes  
        activeTab={activeTab}
        setactiveTab={setactiveTab} 
        words={appendWords}
        />
     <WordsPage 
        activeTab={activeTab}
        words={appendWords}
        />
    <AddWords 
    words={appendWords}
    setAppendWords={setAppendWords}/>  
    </div>
    </div>
  );
}

export default App;
