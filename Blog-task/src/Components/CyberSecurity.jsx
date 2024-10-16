import Card from "./Card";


function CyberSecurity({data}) {
  let csContent = data.filter((item)=> item.category === 'CS')
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {csContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

export default CyberSecurity