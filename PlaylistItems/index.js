import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlaylistItems = props => {
  const {itemDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = itemDetails

  const onDelete = () => {
    deleteTrack(id)
  }

  return (
    <li className="playlist-items">
      <div className="image-track">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="track-info">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete">
        <p className="track-name">{duration}</p>
        <button
          type="button"
          testid="delete"
          className="button"
          onClick={onDelete}
        >
          <AiOutlineDelete color="#cbd5e1" size="20" />
        </button>
      </div>
    </li>
  )
}
export default PlaylistItems
