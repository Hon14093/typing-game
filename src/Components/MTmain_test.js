import React, { Component } from 'react'
import CapsLockWarning from './functions/CapLockDetect'
import ZenFunction from './functions/ZenFunction'
import InputField from './InputField'
import ChoosingMode from './functions/ChoosingMode'

import { toggleButton } from './functions/ToggleFunction'
import { checkWordsClicked } from './functions/CheckWordsClicked'
import { checkQuoteClicked } from './functions/CheckQuoteClicked'
import { checkTimeClicked } from './functions/CheckTimeClicked'

class MTmain_test extends Component {

    componentDidMount() {
        // initialize button click upon loading the website
        const wordsClicked = document.getElementById('wordsButton');
        if (wordsClicked) {
            wordsClicked.click();
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            currentValueWords: '10',
            currentTimeValue: '15',
            currentQuoteLength: 'short',
            selectLang: 'english',
            mode: 'words',
        };
    }

    handleModeChange = (changedMode) => {
        this.setState({mode: changedMode});
    }

    handleWordsClick = (newValue) => {
        this.setState({currentValueWords: newValue});
    }

    handleTimeClick = (newValue) => {
        this.setState({currentValueTime: newValue});
        // this.setState({currentValueWords: newValue});
    }

    handleQuoteClick = (newValue) => {
        this.setState({currentQuoteLength: newValue});
    }

    handleSelectChange = (event) => {
        this.setState({selectLang: event.target.value});
    }

    render() {
        const wordsButtonIds = ['button10', 'button25', 'button50', 'button100', 'buttonWrench'];
        const timeButtonIds = ['button15', 'button30', 'button60', 'button120', 'buttonWrench'];
        const quoteButtonIds = ['all', 'short', 'medium', 'long', 'extended']

        return (
        <>
        {/* config bar */}
        <section className='grid grid-flow-col justify-around text-chaosTxt h-10 gap-3 text-[0.75rem]'>
            <div className='flex items-center px-4 gap-3 justify-around bg-chaosSecond rounded-lg'>

                <article id='puncAndNum' className='flex gap-4 '>
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-at mr-2'></i>
                            punctuation
                        </div>
                    </button>
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-hashtag mr-2'></i>
                            numbers
                        </div>
                    </button>
                </article>

                <div className='w-0.5 h-6 border-2 border-chaosTxt rounded-lg' id='leftBorder'></div>

                <article className='flex gap-4' id='mode'>
                    <button onClick={() => { 
                        checkTimeClicked(); 
                        toggleButton('button15', timeButtonIds); 
                        this.handleTimeClick('15');
                        this.handleModeChange('time')
                    }}>
                        <div className='Ani duration-400' id='timeButton'>
                            <i className='fa-solid fa-clock mr-2'></i>
                            time
                        </div>
                    </button>

                    <button onClick={() => { 
                        checkWordsClicked(); 
                        toggleButton('button10', wordsButtonIds); 
                        this.handleWordsClick('10');
                        this.handleModeChange('words')
                    }}>
                        <div className='Ani duration-400' id='wordsButton'>
                            <i className='fa-solid fa-a mr-2'></i>
                            words
                        </div>
                    </button>

                    {/* <QuoteFunction /> */}
                    <button onClick={() => { 
                        checkQuoteClicked(); 
                        toggleButton('short', quoteButtonIds);
                        this.handleQuoteClick('short');
                        this.handleModeChange('quote')
                    }}>
                        <div className='Ani duration-400' id='quoteButton'>
                            <i className='fa-solid fa-quote-left mr-2'></i>
                            quote
                        </div>
                    </button>

                    <ZenFunction />
                    
                    <button>
                        <div className='Ani duration-400'>
                            <i className='fa-solid fa-wrench mr-2'></i>
                            custom
                        </div>
                    </button>
                </article>

                <div className='w-0.5 h-6 border-2 border-chaosTxt rounded-lg' id='rightBorder'></div>
                
                {/* config button sections */}
                <section id='config'>

                    <div className='hidden' id='timeNum'>
                        <div className='flex gap-4'>
                            {timeButtonIds.map((buttonId) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, timeButtonIds)
                                        this.handleWordsClick(buttonId.substring(6))
                                    }}>

                                    {buttonId === 'buttonWrench' ? (
                                    <i className='fa-solid fa-screwdriver-wrench'></i>
                                    ) : (
                                    buttonId.replace('button', '')
                                    )}
                                    
                                </button>
                            ))}
                        </div>
                    </div>

                    <div id='wordsNum'>
                        <div className='flex gap-4'>
                            {wordsButtonIds.map((buttonId) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, wordsButtonIds)
                                        this.handleWordsClick(buttonId.substring(6))
                                    }}>

                                    {buttonId === 'buttonWrench' ? (
                                    <i className='fa-solid fa-screwdriver-wrench'></i>
                                    ) : (
                                    buttonId.replace('button', '')
                                    )}
                                    
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='hidden' id='quoteLength'>
                        <div className='flex gap-4'>
                            {quoteButtonIds.map((buttonId) => (
                                <button key={buttonId} id={buttonId} className='Ani duration-400'
                                    onClick={() => {
                                        toggleButton(buttonId, quoteButtonIds)
                                        this.handleQuoteClick(buttonId)
                                    }}>

                                    {buttonId === 'buttonWrench' ? (
                                    <i className='fa-solid fa-screwdriver-wrench'></i>
                                    ) : (
                                    buttonId.replace('button', '')
                                    )}
                                    
                                </button>
                            ))}
                        </div>
                    </div>
                    
                </section>
            </div>
            
        </section>

        {/* typing box */}
        <section className='text-chaosTxt text-justify'>
            <CapsLockWarning />

            <div id='textBox' className='text-[1.5rem] overflow-hidden' >
                <div id='selectLanguage'>

                    <div className='flex justify-center items-center mb-2 Ani duration-400 text-lg' id='select'>
                        <i className='fa-solid fa-earth-asia pr-3'></i>
                        <select className='text-chaosTxt bg-chaosBG Ani duration-400 p-0.5 rounded-lg text-center outline-none' onChange={ this.handleSelectChange }>
                            <option value="english">english</option>
                            <option value="english1k">english 1k</option>
                            <option value="english5k">english 5k</option>
                        </select>
                    </div>

                </div>


                {/* Default mode will be 'words' with word number 10 */}
                <ChoosingMode 
                    mode={this.state.mode}
                    quoteLength={this.state.currentQuoteLength}
                    language={this.state.selectLang}
                    wordsValue={this.state.currentValueWords} 
                />
                <div id='cursor' className='animate__animated animate__flash animate__infinite infinite animate__slow'></div>
                <InputField />

            </div>
            

            <button className='flex Ani duration-400 py-4 px-8 mt-4 mx-auto rounded-lg'>
                <i className='fa-solid fa-arrow-rotate-right'></i>
            </button>
            
        </section>

        <section className='size-5'></section></>
        )
    }
}

export default MTmain_test
