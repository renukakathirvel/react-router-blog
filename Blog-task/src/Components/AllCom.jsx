import Card from "./Card";

function AllCom({data}) {
  let allContent = data;
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {allContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  );
}

export default AllCom;