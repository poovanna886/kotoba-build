import { React, useState } from 'react'
import './WordsPage.css'
import typeMap from '../../assets/TypeMap';
import { GoPlay } from 'react-icons/go';
import { FiEdit, FiShare2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import EditModal from '../Popups/EditModal';
import SharePopup from '../Popups/SharePopup';
import useSound from 'use-sound';
import haram from '../../assets/audiotest.mp3';

const getWords = (activeTab, words) => {

    let filteredWords = [];
    typeMap.map((type, index) => {
        if(activeTab === type[0])
        {       
            words.map((word, index) => {
                if(word.type === type[1]){
                    filteredWords.push(word)
                }
            })
        }
})
    
    return filteredWords;
}
const WordsPage = (props) => {
    const {activeTab, words} = props;

   
    const filteredWords = activeTab === 'All' ? words : getWords(activeTab,words);
    const size = filteredWords.length;
    const leftSide = size === 1 ? filteredWords: words.slice(0, size / 2);
    const rightSide = size === 1 ? [] : words.slice(size / 2, size);

    const [openPopup, setOpenPopup] = useState(false)
    const [openSharePopup, setSharePopup] = useState(false)
    const [play] = useSound(haram);

    return (
        <div className='mainPage'>
              <div className='pageHeader'>
                        <span>{size} words and phrases</span>
                        <div>
                            <label>Sort: </label>
                            <select>
                                <option value="Date"> Date
                                </option>
                            </select>
                        </div>
                    </div>
            {size === 0 ?
                <div className='empty-page'>
                    Add new words to see them
                </div>
                :
                <div>
                  
                    <div className='wordsPage'>
                        <div className='leftColumn'>{
                            leftSide.map((word, index) => (
                                <div className='row-item' key={index}>
                                    <div className='top-row'>
                                        <div>{word.japaneseWord}</div>
                                        <GoPlay onClick={play} /> 
                                        <div>{word.englishWord}</div>

                                        <div>{word.type}</div>
                                    </div>
                                    <div className='bottom-row'>
                                        <span>{word.pronunciation}</span>

                                    </div>
                                    <div className='icons'>
                                        <FiEdit onClick={() => setOpenPopup(true)} />
                                        <FiShare2 onClick={() => setSharePopup(true)} />
                                        <AiOutlineDelete onClick={() => words.slice(index)}/>

                                    </div>
                                    <EditModal title={word.englishWord} word={word} openPopup={openPopup} setOpenPopup={setOpenPopup} />
                                    <SharePopup title={'title'} openPopup={openSharePopup} setOpenPopup={setSharePopup} />
                                </div>
                            ))}</div>
                        <div className='rightColumn'>{
                            rightSide.map((word, index) => (
                                <div className='row-item' key={index}>
                                    <div className='top-row'>
                                        <div className='japaneseWord'>{word.japaneseWord}</div>
                                         <GoPlay onClick={play} />
                                        <div>{word.englishWord}</div>
                                        <div>{word.type}</div>
                                    </div>
                                    <div className='bottom-row'>
                                        <span>{word.pronunciation}</span>
                                        <div></div>
                                    </div>

                                    <div className='icons'>
                                        <FiEdit />
                                        <FiShare2 />
                                        <AiOutlineDelete />
                                    </div>
                                </div>))}</div>


                    </div>
                </div>
            }
        </div>
    )
}

export default WordsPage