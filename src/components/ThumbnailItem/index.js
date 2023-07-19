// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onClickThumbnail = () => {
    updateThumbnailId(id)
  }

  const activeClassName = isActive ? `thumbnail active` : `thumbnail`
  return (
    <li className="thumbnail-list">
      <button className="btn" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
