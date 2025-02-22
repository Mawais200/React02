import Card from './Card'

function CardTab(){
    let option = ["awais", "Ali", "Naveed", "abdullah"]
    return(
        <div>
            <Card title="Game Developer" decription={2} feature={option}/>
            <Card title="App Developer" decription="Learn React Native,Flutter,Angular"/>
        </div>
    )

}
export default CardTab