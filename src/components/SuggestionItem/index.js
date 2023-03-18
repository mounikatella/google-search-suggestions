// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }

  return (
    <l1 className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        className="arrow-image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickArrow}
      />
    </l1>
  )
}

export default SuggestionItem
