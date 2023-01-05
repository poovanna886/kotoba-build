import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import {AiOutlineClose} from 'react-icons/ai';
import AddWords from '../AddWords/AddWords'
import './EditModal.css'


const EditModal = (props) => {
    const {title, word, openPopup, setOpenPopup} = props;

  return (
   <Dialog open={openPopup} fullWidth maxWidth='sm'>
    <DialogTitle>
    <div className='popup-header'>
        <div>
            Edit for {title}
        </div>
        <div>
        <AiOutlineClose onClick={() => setOpenPopup(!openPopup)}/>
        </div>
    </div>
    </DialogTitle>
    <DialogContent>
        <div className="edit-form">
            <div className='first-row'>
                <div contentEditable={true}>
                    {word.japaneseWord}
                </div>
                <div contentEditable={true}>
                    {word.englishWord}
                </div>
            </div>
            <div className='second-row'>
       <div>
          <select >
                <option>noun</option>
                <option>pronoun</option>
                <option>adjective</option>
                <option>greeting</option>
                <option>phrase</option>
                <option>measure</option>
                <option>verb</option>
          </select>

                </div>
                <div contentEditable={true}>
                    {word.pronunciation}
                </div>
            </div>
            <button onClick={() => setOpenPopup(false)}>Save</button>
        </div>
    </DialogContent>
   </Dialog>
  )
}

export default EditModal