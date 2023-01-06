import React from 'react'
import './AddWords.css'
import { useForm } from "react-hook-form";
import dbData from '../../assets/testdb'
import { useDispatch } from 'react-redux';

import { addNewWord } from '../../counterSlice'

const AddWords = (props) => {
  const dispatch = useDispatch()
  const words= props
 
  //const [appendWords, setAppendWords] = useState({})

  const { register, handleSubmit , reset, formState, submittedData} = useForm();
  const onSubmit = (data, e) => {
    console.log('in add word')
    const wordId = words.words.length
    console.log(wordId);
    const newWord = {
      id: wordId,
      japaneseWord: data.japaneseWord,
      englishWord: data.englishWord,
      type: data.type,
      pronunciation:data.pronunciation
    }
    console.log(newWord)
    
    //words.push(data);
    //setNewWord(words.push(data))
    //setAppendWords(data)
    dispatch(addNewWord(newWord))
    console.log(words.length)
    console.log(typeof(words))
    console.log(words)
    
  }

  const onError = (errors, e) => console.log(errors, e);

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ japaneseWord: '', type: '', pronunciation: '', englishWord: '' });
      
    }
  }, [formState, submittedData, reset]);
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
    <div className='addWords' >
        <div>Add a word or phrase</div>
        <div className='new-word'>
          <span>Japanese Word or Phrase</span>
          <input {...register("japaneseWord")} placeholder='e.g., 猫' />
        </div>
        <div className='new-type'>
          <span>Word or phrase type</span>
          <select {...register("type")} >
            <option value={'n.'}>noun</option>
            <option value={'pn.'}>pronoun</option>
            <option value={'adj.'}>adjective</option>
            <option value={'verb.'}>verb</option>
            <option value={'greeting.'}>greeting</option>
            <option value={'phrase.'}>phrase</option>
            <option value={'measure.'}>measure</option>
          </select>
        </div>
        <div className='pronunciation'>
          <span>Pronunciation:</span>
          <input {...register("pronunciation")} placeholder='e.g., Kyō' />
        </div>

        <div className='translation'>
          <span>English Translation:</span>
          <input {...register("englishWord")} placeholder='e.g., book' />
        </div>

        <button>Save</button>
    </div>
    </form>
  )
}

export default AddWords