import { useState } from "react";
import './Video10.css'

export interface ITest{
    name: string,
    age: number
}

const Video10 = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | string>("");
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);

    const [users, setUsers] = useState<IUser[]>([
        { name: "Eric", age: 25, city: "Hà Nội" },
        { name: "Eric1", age: 26, city: "Đà Nẵng" },
        { name: "Eric2", age: 27, city: "Hồ Chí Minh" },
    ])

    interface IUser{
        name: string,
        age: number,
        city: string;
    }

    const [test, setTest] = useState<ITest | null>({
        name: 'hailong',
        age: 22
    })

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);


    return (
        <>
            <div>Example video 10:  hello world</div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age}/><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select>
                        {city.map(item =>{
                            return(
                                <option key={item}>{item}</option>
                            )
                        })}

                    </select>
                </div>

                <input type="submit" value="Submit" />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(item =>{
                            return(
                                <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;