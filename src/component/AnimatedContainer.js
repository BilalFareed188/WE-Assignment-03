import '../global.css';

const AnimatedContainer = (props) =>{
    return(
        <div class="col-md-12 ac" >
            <div class="grid">
                <figure class="effect-slideleft">
                    <img src={props.CarImg}/>
                    <figcaption class="p-5">
                        <h2>Car</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                    </figcaption>			
                </figure>
            </div>
        </div>
    );
}

export default AnimatedContainer;