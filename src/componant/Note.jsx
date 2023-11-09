// import Card from './componant/Card'
import Box from "./Box";
import "../style/Note.css"


function Note() {

    return (
        <>
            <div className="l-nots">
                <h1>Latest Articles </h1>

            </div>
            <div className="about-cont">
                <div className="box-1">
                < Box  change="/img/cat.jpeg" para="Modern and colorful style of caricatures created by AI"profile="/img/girl.jpeg" name=" Adriana Martins .

" />

                </div>
                <div className="box-2">
                < Box change="/img/clock.jpeg" para="More effective schedules in remote work" profile="/img/boys.jpeg" name=" James Brawson  .

" />

                </div>
                <div className="box-3">
                < Box change="/public/img/ball.jpg" para="Some sports that will be affected by big-data advances" profile="/img/girl.jpeg" name=" Adriana Martins .

" />

                </div>
                <div className="box-4">
                < Box change="/img/dog.jpeg" para="Animals that captivate people with their intelligence" profile="/img/boys.jpeg" name=" James Brawson  .

" />

                </div>
                <div className="box-5">
                < Box change="/img/flower.jpg" para="From pixels to masterpieces: AI in the arts world" profile="/img/girl.jpeg" name=" Adriana Martins .

" />

                </div>
                <div className="box-6">
                < Box change="/public/img/proces.jpg" para="Artificial Intelligence in the generative image process
" profile="/public/img/girl.jpeg"  name=" Adriana Martins .

"/>

                </div>
            </div>




        </>
    )
}
export default Note;