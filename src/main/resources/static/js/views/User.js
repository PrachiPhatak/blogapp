export default function User(props){
    console.log(props)
    return `<h3>Hello, ${props.users.userName}</h3>
            <input type="text" class="password" value="${props.users.password}">`

}