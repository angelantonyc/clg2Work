function Checkbox({ checked, id, handleCheckbox, label }) {

    return (<div>
        <label>
            <input type="checkbox" defaultChecked={checked} value={id} onClick={handleCheckbox} />
            {label}
        </label>
    </div>)
}

export default Checkbox