import UserInfo from "./UserInfo"

export default function Container({ children }) {
    return (
        <div>
            {children}
            <p>Container do App</p>
            <UserInfo />
        </div>
    )
}