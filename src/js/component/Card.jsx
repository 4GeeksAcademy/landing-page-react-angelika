import React from "react";


const Card = (props) => {

    const image = props.image || "https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg";
    const title = props.title || "Card title";
    const txContentCard = props.txContentCard || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quis, nobis iste dicta aut corrupti nesciunt repellendus explicabo libero vitae natus praesentium iusto id! Praesentium dignissimos beatae perferendis ipsum magnam?";
    const btnContent = props.btnContent || "Find Out More!";

    return (
        <div className="card mb-3" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center">{txContentCard}</p>
                <div className="d-flex justify-content-center">
                    <a href="#" className="btn btn-primary">{btnContent}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;