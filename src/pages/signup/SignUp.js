import './signup.scss';
import Component from "@/plugins/component";

export default class SignUp extends Component {
    render() {
        return `
        <main>
            <div class="signup-page">
                <h2>Welcome to Sign Up Page</h2>
                <p>This is a sample Sign Up page. Feel free to add your sign-up form or other content here.</p>
                <button class="btn">Sign Up</button>
            </div>
        </main>
        `;
    }
}