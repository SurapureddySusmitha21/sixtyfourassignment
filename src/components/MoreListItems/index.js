import "./index.css"

const MoreListitems=(props)=>{
    const {eachList}=props 
    const {listName,imageUrl,listParahraph}=eachList
    return(

   <li className="list_item">
    <img src={imageUrl} alt={listName} className=""/>
    <h1 className="">{listName}</h1>
    <p className="">{listParahraph}</p>
   </li>
)}

export default MoreListitems