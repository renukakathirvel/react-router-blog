import Card from "./Card";


function FullStackDev({data}) {
  let fsdContent = data.filter((item)=> item.category === 'FSD')
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {fsdContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

export default FullStackDev