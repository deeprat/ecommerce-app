const home = () => {
    return (
        <>
            <h1>Home</h1>
            <h3>
                {localStorage.getItem('user') ? `Welcome ${JSON.parse(localStorage.getItem('user')).firstname}` : ""}
            </h3>
        </>
    );
}
export default home;
