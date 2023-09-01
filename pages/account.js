import Layout from "@/components/layout";
import NavigatePage from "@/components/navigation";
import { useState } from "react";

export default function RsvpPage() {
    return (
        <Layout>
            <NavigatePage pageName="home"></NavigatePage>
            <p>account page here!</p>
            <LoginArea></LoginArea>
        </Layout>
    );
}

function UserArea() {
    return (
        <>
            <label for="userArea">User</label>
            <br></br>
            <input type="text" name="userArea" id="user" required />
            <br></br>
            <br></br>
        </>
    );
}

function PassArea() {
    return (
        <>
            <label for="passArea">Pass</label>
            <br></br>
            <input type="text" name="passArea" id="pass" required />
            <br></br>
            <br></br></>);
}

function LoginArea() {
    return (
        <form
            action=""
            method="post">
            <div class="loginArea">
                {/* <label for="userArea">User</label>
                <br></br>
                <input type="text" name="userArea" id="user" required />
                <br></br>
                <br></br> */}
                <UserArea></UserArea>
                {/* <label for="passArea">Pass</label>
                <br></br>
                <input type="text" name="passArea" id="pass" required />
                <br></br>
                <br></br> */}
                <PassArea></PassArea>
                {/* <button style={{ marginRight: '5px' }}>Login</button>
                <button style={{ marginRight: '5px' }}>Signup</button>
                <button>Help</button> */}
                <br></br>
                <NavigatePage pageName={"login"}></NavigatePage>
                <NavigatePage pageName={"signup"}></NavigatePage>
                <NavigatePage pageName={"help"}></NavigatePage>
            </div>
        </form>
    );
}