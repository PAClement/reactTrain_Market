import React from 'react';

const Card = (props) => {

    const { article } = props;

    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={article.image} className="img-fluid article-img rounded-start" alt={article.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <h6>Categorie : {article.category}</h6>
                            <ul className='mt-3'>
                                <li>{`${article.price} €`}</li>
                                <li>{`${article.rating.count} articles remaining`}</li>
                            </ul>
                            <button type="button" className="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target={`#modal_${article.id}`}>
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id={`modal_${article.id}`} className="modal fade" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{article.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{article.description}</p>
                            <h2>{article.price} €</h2>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;