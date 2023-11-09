import "../style/Box.css"



function Box( {change, para, profile, name}) {
    return (
        <>
        <div className="about">


            <div className="l-img">
                <img src={change} alt="" />
                </div>

            <div className="all-text">

            <div className="l-text">
                <h2>{para} </h2>

            </div>
            <div className="l-adr">
                <div className="la-img">
                    <img src={profile} alt="" />
                </div>
                <div className="la-name">
                    <p> By <span>{name} </span></p>
                </div>
                <div className="date">
                    <p>October 21, 2023</p>
                </div>
            </div>
            <div className="b-text">
                <p>AI-powered tools and algorithms have redefined caricature creation in novel...</p>
            </div>
            <div className="box-end">
                <div className="rm">
                <button>Read more</button>

                </div>
                <div className="re">
                <p>2 min read</p>

                </div>
  
                </div>
                </div>



            </div>



        </>
    )
}
export default Box;