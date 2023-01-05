
import './App.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { addNewWord, selectWords } from './counterSlice'
import AddWords from './Components/AddWords/AddWords';
import Header from './Components/Header/Header';
import WordsPage from './Components/WordsPage/WordsPage';
import WordTypes from './Components/WordTypes/WordTypes';
//import words from './assets/data';

function App() {
  //const activeTab = 'All';
  const words = useSelector(selectWords)
  //console.log(words);
 
   const [activeTab, setactiveTab] = useState('All')

  

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
        words={words}
        />
     <WordsPage 
        activeTab={activeTab}
        words={words}
        />
    <AddWords 
    words={words}
    />  
    </div>
    </div>
  );
}

export default App;
