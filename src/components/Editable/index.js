import {Component} from 'react'
import {MainContainer, EditableCard} from './StyledComponents'
import './index.css'

class Editable extends Component {
  state = {
    edit: false,
    text: '',
  }

  onClickEditOrSaveButton = () => {
    this.setState(prevstate => ({
      edit: !prevstate.edit,
    }))
  }

  onChangeInput = event => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    const {edit, text} = this.state
    return (
      <MainContainer>
        <EditableCard className="editable-card">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-container">
            {!edit ? (
              <input
                type="text"
                className="input-element"
                value={text}
                onChange={this.onChangeInput}
              />
            ) : (
              <p className="para-style">{text}</p>
            )}
            <button
              type="button"
              className="button-style"
              onClick={this.onClickEditOrSaveButton}
            >
              {edit ? 'Edit' : 'Save'}
            </button>
          </div>
        </EditableCard>
      </MainContainer>
    )
  }
}

export default Editable
