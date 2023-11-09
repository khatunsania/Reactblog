import "../style/Nav.css"

function Nav(){
    return(
        <>
        <div className="nav">
            <div className="logo">
                <h1>Wavy</h1>
            </div>
            <div className="bars">
                <ul>
                    <li>Home</li>
                    <li>class</li>
                    <li>about</li>
                    <li>contact us</li>
                </ul>
            </div>
            <div className="log-but">
                <button>Login</button>
                <button>Subcribe</button>

            </div>
        </div>
        <div className="home-text">
        <h1>Welcome to Wavy, a fast 🚀and modern theme fully compatible with Ghost!</h1>
        <p>Rich right us federal alone degree issue professor. Form crime tough effect least store day. Deep range they modern.</p>
        </div>
        <div className="view">
            <p><button>view Plans</button></p>

        </div>



        </>
    )
}
export default Nav;