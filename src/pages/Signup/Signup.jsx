import { ClipoHeader } from "../../components/header/Header";
import { LogInpWays } from "../../components/Login/LoginWays";
import { SignUpBody } from "../../components/Signup/SignUpBody";

export function Signup(){
    return <div>
    <ClipoHeader/>
    <SignUpBody/>
    <LogInpWays/>
    </div>
}