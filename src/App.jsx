import './App.css';
import Teams from './components/Teams'

const App = () => {

  return (
    <div className="App">
      <img src='https://assets.stickpng.com/images/5842fe06a6515b1e0ad75b3b.png' className='champions'></img>
      <h1>16 Historic Teams</h1>
      <div className='container'>
        <Teams name='Barcelona' country='Spain' image='https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png' link='https://www.fcbarcelona.com/en/football/first-team/players'/>
        <Teams name='Real Madrid' country='Spain' image='https://cdn.freebiesupply.com/logos/thumbs/2x/real-madrid-c-f-logo.png' link='https://www.realmadrid.com/en/football/squad'/>
        <Teams name='Paris Saint Germain' country='France' image='https://assets.stickpng.com/images/580b57fcd9996e24bc43c4d8.png' link='https://en.psg.fr/teams/first-team/squad'/>
        <Teams name='Bayern Munich' country='Germany' image='https://assets.stickpng.com/thumbs/584d8683367b6a13e54477d4.png' link='https://fcbayern.com/en/teams/first-team'/>
        <Teams name='Dortmund' country='Germany' image='https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png?20120122093958' link='https://www.bvb.de/eng/Teams/First-Team'/>
        <Teams name='Manchester United' country='England' image='https://upload.wikimedia.org/wikipedia/hif/f/ff/Manchester_United_FC_crest.png' link='https://www.manutd.com/en/players-and-staff/first-team'/>
        <Teams name='Manchester City' country='England' image='https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/1024px-Manchester_City_FC_badge.svg.png' link='https://www.mancity.com/players/mens'/>
        <Teams name='Chelsea' country='England' image='https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e1.png' link='https://www.chelseafc.com/en/teams/men'/>
        <Teams name='Arsenal' country='England' image='https://cdn.freebiesupply.com/logos/thumbs/2x/arsenal-6-logo.png' link='https://www.arsenal.com/men/players'/>
        <Teams name='Liverpool' country='England' image='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c4e5.png' link='https://www.liverpoolfc.com/team/first-team'/>
        <Teams name='Inter Milan' country='Italy' image='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png' link='https://www.inter.it/en/teams/first-team?role=all'/>
        <Teams name='Juventus' country='Italy' image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Juventus_Logo.png/1200px-Juventus_Logo.png' link='https://www.juventus.com/en/teams/first-team-men/squad/'/>
     
      </div>
    </div>
  )
}

export default App