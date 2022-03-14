import client from './HttpClient';

class AuthService {
    login(email, password) {
        return client.post("/auth/signin", {
            email,
            password
        }).then(response => {
            console.log(response.data)
            if (response.data.token) {
                console.log(response.data)
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(userDetails) {
        return client.post("/auth/signup", userDetails);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();