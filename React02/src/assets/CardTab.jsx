import Card from './Card'

function CardTab(){
    let option = ["awais", "Ali", "Naveed", "abdullah"]
    // let option =[<li>"AWAIS"</li>,<li>"AWAIS"</li>,<li>"AWAIS"</li>,]

    return(
        <div>
            <Card title="Game Developer" price={2000} features={option}/>
            <Card title="App Developer" price={4000}/>
            <Card title="Web Developer" price={4000}/>
        </div>
    )

}
export default CardTab