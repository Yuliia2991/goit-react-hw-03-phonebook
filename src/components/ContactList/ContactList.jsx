export const ContactsList = ({contacts}) => {
    return (
        contacts.length > 0 && <ul>
            {contacts.map(({id, name, number}) =>
            <li key={id}>
              <p>{name}: {number}</p>
            </li>
          )}
        </ul>   
    )
}
