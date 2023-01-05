import React, { useState } from 'react'
import './WordTypes.css'
//import words from '../../assets/data'

const WordTypes = (props) => {
   const {activeTab, setactiveTab, words} = props;
 
   
   //words.push(appendWords)
    
    console.log('in filter')
    console.log(words)
    const size = words.length;
    
    let n = ['noun' , 0]
    let pn = ['pronoun', 0]
    let adj = ['adjective', 0]
    let verb = ['verb', 0]
    let greet = ['greeting', 0]
    let mea = ['measure', 0]
    let phr = ['phrase', 0]
    let typeArray = [];
    typeArray.push(['All', size])
    
    words.map((word, index) => {
        if(word.type === 'n.') n[1]++
        if(word.type=== 'pn.') pn[1]++
        if(word.type=== 'adj.') adj[1]++
        if(word.type === 'verb.') verb[1]++
        if(word.type=== 'greeting.') greet[1]++
        if(word.type=== 'measure.') mea[1]++
        if(word.type=== 'phrase.') phr[1]++
})
    
    typeArray.push(n);
    typeArray.push(pn);
    typeArray.push(adj);
    typeArray.push(verb);
    typeArray.push(greet);
    typeArray.push(mea);
    typeArray.push(phr);

    //const typeArray = [['All', 19],['noun', 10],['pronoun', 1], ['verb', 1], ['adjective', 3], ['greeting', 2] , ['measure', 1], ['phrase', 1]]
    
    return (
        <div className='wordtypes'>
            <div className='filter'>Filter Words</div>
            <div className='types'>
                {typeArray.map((item, index) => (

                    <div className={activeTab === item[0] ? 'active' : 'typeList'} onClick={() => { setactiveTab(item[0])}} >
                        <div>{item[0]}</div>
                        {}
                        <div>{item[1]}</div>
                    </div>

                ))}
            </div>
        </div>

    )
}

export default WordTypes