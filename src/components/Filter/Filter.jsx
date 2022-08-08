export const Filter = ({ value, onChange }) => {
    
    return (
        // contacts.map(contacts =>
        //     )
        <label>
            Find contacts by name
          <input type="text" value={value} onChange={onChange} />
        </label>
    )
}