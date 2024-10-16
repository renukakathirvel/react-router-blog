import Card from "./Card";


function Career({data}) {
  let careerContent = data.filter((item)=> item.category === 'Career')
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {careerContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Career