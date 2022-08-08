import css from './ContactList.module.css'

export const ContactsList = ({ contacts, onDelete }) => {
    return (
        contacts.length > 0 && <ul className={css.contacts}>
            {contacts.map(({id, name, number}) =>
                <li className={css.contacts__item} key={id}>
                <p className={css.contacts__text}>{name}: {number}</p>
                    <button className={css.contacts__btn} type="button" onClick={() => onDelete(id)}>Delete</button>
            </li>              
          )}
        </ul>   
    )
}
