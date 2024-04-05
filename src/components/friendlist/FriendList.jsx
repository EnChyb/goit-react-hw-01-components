import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
    <ul class={css.friendlist}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li key={id} class={css.item}>
                <span class={isOnline ? css.online : css.offline}>●</span>
                <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p class={css.name}>{name}</p>
            </li>
        ))
        }
        
  
    </ul>

);

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}