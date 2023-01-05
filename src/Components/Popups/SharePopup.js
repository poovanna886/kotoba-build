import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import {AiOutlineClose} from 'react-icons/ai';
import {FaFacebookSquare,FaWhatsapp, FaTwitter} from 'react-icons/fa';
import './SharePopups.css';

const SharePopup = (props) => {
    const {title, children, openPopup, setOpenPopup} = props;
  return (
    <Dialog open={openPopup} fullWidth maxWidth='sm'>
    <DialogTitle>
    <div className='popup-header'>
        <div>
        Share
        </div>
        <div>
        <AiOutlineClose onClick={() => setOpenPopup(!openPopup)}/>
        </div>
    </div>
    </DialogTitle>
    <DialogContent>
        <div className='social-icons'>
        <FaFacebookSquare />
        <FaWhatsapp />
        <FaTwitter />
        </div>
    </DialogContent>
   </Dialog>
  )
}

export default SharePopup