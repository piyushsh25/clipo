import { ClipoHeader } from "../../components/header/Header";
import { LoginBody } from "../../components/Login/LoginBody";
import { LogInpWays } from "../../components/Login/LoginWays";

export function Login() {
    return <div>
        <ClipoHeader />
        <LoginBody/>
        <LogInpWays/>
    </div>
}