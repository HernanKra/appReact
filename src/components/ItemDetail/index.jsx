import './itemDetail.css';

const ItemDetail = ( { data } ) => {
    return (
        <div className='detailCont'>
            <div>
                <img src={data.image} alt="" className="imgDetail" />
                <div>
                    <h1 className="titleDetail" >{data.name}</h1>
                </div>
                <div>
                    <p className="parrDetail">
                        {data.description} <br />
                        $ {data.price}
                    </p>
                </div>
            </div>
        </div>

    )
};

export default ItemDetail;