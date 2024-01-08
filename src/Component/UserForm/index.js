import {useState} from 'react'

const UserForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        gender: '',
    });

    const handleInputChange = (event) => {
        event.preventDefault()
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }


    return (
        <div>
            <h1>User Form</h1>
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
                <label>Age:</label>
                <input type="number" name="age" value={userData.age} onChange={handleInputChange} />
                <label>Gender:</label>
                <label>
                    <input type="checkbox" name="gender" value="male" onChange={handleInputChange} /> Male
                </label>
                <label>
                    <input type="checkbox" name="gender" value="female" onChange={handleInputChange} /> Female
                </label>
            </form>
            <button onClick={() => {console.log(userData)}}>Submit</button>
        </div>
    )
}

export default UserForm;