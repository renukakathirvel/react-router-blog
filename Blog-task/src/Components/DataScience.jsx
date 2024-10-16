import Card from "./Card";


function DataScience({data}) {
  let dsContent = data.filter((item)=> item.category === 'DS')
  return (
    <>
      <div className="container">
        <div className="row py-5">
          {dsContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

export default DataScience