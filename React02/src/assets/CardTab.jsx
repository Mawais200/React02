import Card from './Card'

function CardTab(){
    let option = ["awais", "Ali", "Naveed", "abdullah"]
    // let option =[<li>"AWAIS"</li>,<li>"AWAIS"</li>,<li>"AWAIS"</li>,]

    return(
        <div>
            <Card title="Game Developer" decription={2} features={option}/>
            <Card title="App Developer" decription="Learn React Native,Flutter,Angular"/>
        </div>
    )

}
export default CardTab