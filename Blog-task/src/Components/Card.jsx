import PropTypes from "prop-types";

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    category : PropTypes.string.isRequired
  }).isRequired,
};

function Card({ data }) {
  return (
    <>
      <div className="col-md-6 col-md-6 col-lg-4 col-xl-4 mb-4">
        <div className="card h-120">
          <img src={data.image} className="card-img-top mb-2" alt="card_img" />
          <div className="card-body px-4 mt-3">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-md-txt">Read More » </p>
          </div>
          <div className="card-footer ps-4 py-2 bg-dark">
            <p className="txt my-2">
              {data.date} &nbsp;•&nbsp; {data.comment}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;