import person from '../assets/person.jpg'
import DescComp from '../components/home/desc'

function HomePage() {
    return (
        <div className="home">
            <div>
                <img src={person} alt="person" className="person"/>
            </div>
            <DescComp />
        </div>

    )
}

export default HomePage