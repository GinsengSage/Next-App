import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({user}){
    return (
        <MainContainer>
            <div className={styles.user}>
                <h1>User c id: {user.id}</h1>
                <p>User name: {user.name}</p>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return{
        props: {user},
    }
}
