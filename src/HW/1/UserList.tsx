import {FC} from "react";

type AddressType = {
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
    // ПРИДЕТСЯ САМОМУ)
    id: number
    name: string
    age: number
    address: AddressType
};

type UserListPropsType = {
    users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList: FC<UserListPropsType> = (props) => {
    const {users} = props
    //        {id: 8, name: 'Robert', age: 4, address: {street: '876 Spruce Way', city: 'San Francisco'}},
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {users.map((user) => (// ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={user.id} id={`hw01-user-${user.id}`}>
                        <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
                        {user.address.street}, {user.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};