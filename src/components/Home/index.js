import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import Content from '../Content'
import MoreListitems from "../MoreListItems"
import './index.css'

const listItem=[{
  id:"1",
  imageUrl:"",
  listName:"State of Markets",
listParahraph:"The Market capitalisation of Indian stocks crossed USS4.5 trillion in January"
},
{
  id:"2",
  imageUrl:"",
  listName:"Yhe Central Capex Surge",
listParahraph:"The last few years have seen a very substantial step up n capital"
},
{
  id:"3",
  imageUrl:"",
  listName:"Direct Taxes and Business Cycle",
listParahraph:"The share of direct taxes in total tax collections of the Central government is"
},
{
  id:"4",
  imageUrl:"",
  listName:"Banking Monitor",
listParahraph:"Credit growth has remained broadly stable in recent weeks at just"
},
{
  id:"5",
  imageUrl:"",
  listName:"State of Markets",
listParahraph:"The Market capitalisation of Indian stocks crossed USS4.5 trillion in January"
},
{
  id:"6",
  imageUrl:"",
  listName:"Yhe Central Capex Surge",
listParahraph:"The last few years have seen a very substantial step up n capital"
}
]

console.log(listItem)

class Home extends Component {
  state={isTrue:true}

  getClick=()=>{
    this.setState((prevsState)=>({isTrue:!prevsState.isTrue}))
  }

  

  render() {
    const {isTrue}=this.state
    const listSlice=isTrue ? listItem.slice(0,3):listItem.slice(0,6)
    console.log(listSlice)
    return (
      <div className='container'>
        <SideBar/>
        <div className='container2'>
          <Header />
          <Content />
         
          <ul className='ul-container'>
{listSlice.map((each)=>(
  <MoreListitems key={each.id} eachList={each}/>
))}
          </ul>

          <button className='viewMore' onClick={this.getClick}>View Moew</button>
        </div>
      </div>
    )
  }
}
export default Home