import React, { Component } from 'react'

export class Left extends Component {
    state = {
        isAasiyaJayavant: false,
        isLuvleenLawrence: false,
        isReyMibourne: false,
        isCaylaBrister: false,
        isDeveedaasNandi: false,
        isObaseyChidy: false,
        isXenieDolezelova: false,
        isEzeqquielDengra: false,
        isAaronAlmaraz: false,
        isJelenaDenisova: false
    };
    onChangeAasiyaJayavant = () => {
        this.setState(initialState => ({
            isAasiyaJayavant: !initialState.isAasiyaJayavant,
        }));
      }
      onChangeLuvleenLawrence = () => {
        this.setState(initialState => ({
            isLuvleenLawrence: !initialState.isLuvleenLawrence,
        }));
      }
      onChangeReyMibourne = () => {
        this.setState(initialState => ({
            isReyMibourne: !initialState.isReyMibourne,
        }));
      }
      onChangeCaylaBrister = () => {
        this.setState(initialState => ({
            isCaylaBrister: !initialState.isCaylaBrister,
        }));
      }
      onChangeDeveedaasNandi = () => {
        this.setState(initialState => ({
            isDeveedaasNandi: !initialState.isDeveedaasNandi,
        }));
      }
      onChangeObaseyChidy = () => {
        this.setState(initialState => ({
            isObaseyChidy: !initialState.isObaseyChidy,
        }));
      }
      onChangeXenieDolezelova = () => {
        this.setState(initialState => ({
            isXenieDolezelova: !initialState.isXenieDolezelova,
        }));
      }
      onChangeEzeqquielDengra = () => {
        this.setState(initialState => ({
            isEzeqquielDengra: !initialState.isEzeqquielDengra,
        }));
      }
      onChangeAaronAlmaraz = () => {
        this.setState(initialState => ({
            isAaronAlmaraz: !initialState.isAaronAlmaraz,
        }));
      }
      onChangeJelenaDenisova = () => {
        this.setState(initialState => ({
            isJelenaDenisova: !initialState.isJelenaDenisova,
        }));
      }




    render() {
        return (
            <div>
                <div className='left'>
                    <div>
                        <h4>Portugal</h4>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isAasiyaJayavant} onChange={this.onChangeAasiyaJayavant}/>
                            <span>Aasiya Jayavant</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isLuvleenLawrence} onChange={this.onChangeLuvleenLawrence}/>
                            <span>Luvleen Lawrence</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isReyMibourne} onChange={this.onChangeReyMibourne}/>
                            <span>Rey Mibourne</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isCaylaBrister} onChange={this.onChangeCaylaBrister}/>
                            <span>Cayla Brister</span>
                        </label>
                        </p>
                    </div>
                    <div>
                        <h4>Nicaragua</h4>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isDeveedaasNandi} onChange={this.onChangeDeveedaasNandi}/>
                            <span>Deveedaas Nandi</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isObaseyChidy} onChange={this.onChangeObaseyChidy}/>
                            <span>Obasey Chidy</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isXenieDolezelova} onChange={this.onChangeXenieDolezelova}/>
                            <span>Xenie Dolezelova</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isEzeqquielDengra} onChange={this.onChangeEzeqquielDengra}/>
                            <span>Ezeqquiel Dengra</span>
                        </label>
                        </p>
                    </div>
                    <div>
                        <h4>Marshall Islands</h4>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isAaronAlmaraz} onChange={this.onChangeAaronAlmaraz}/>
                            <span>Aaron Almaraz</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" checked={this.state.isJelenaDenisova} onChange={this.onChangeJelenaDenisova}/>
                            <span>Jelena Denisova</span>
                        </label>
                        </p>
                    </div>
                </div>
                <div className='right'>
                    {
                        this.state.isAasiyaJayavant===true?<div className='checkedOnes'>Aasiya Jayavant </div>:null
                    }
                    {
                        this.state.isLuvleenLawrence===true?<div className='checkedOnes'>LuvleenLawrence </div>:null
                    }
                    {
                        this.state.isReyMibourne===true?<div className='checkedOnes'>Rey Mibourne </div>:null
                    }
                    {
                        this.state.isCaylaBrister===true?<div className='checkedOnes'>Cayla Brister </div>:null
                    }
                    {
                        this.state.isDeveedaasNandi===true?<div className='checkedOnes'>Deveedaas Nandi </div>:null
                    }
                    {
                        this.state.isObaseyChidy===true?<div className='checkedOnes'>Obasey Chidy </div>:null
                    }
                    {
                        this.state.isXenieDolezelova===true?<div className='checkedOnes'>Xenie Dolezelova </div>:null
                    }
                    {
                        this.state.isEzeqquielDengra===true?<div className='checkedOnes'>Ezeqquiel Dengra </div>:null
                    }
                    {
                        this.state.isAaronAlmaraz===true?<div className='checkedOnes'>isAaron Almaraz </div>:null
                    }
                    {
                        this.state.isJelenaDenisova===true?<div className='checkedOnes'>Jelena Denisova </div>:null
                    }
                </div>
            </div>
        )
    }
}

export default Left
