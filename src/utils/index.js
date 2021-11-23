import {collection,getDocs} from '@firebase/firestore'
import database from '../firebase'
export const highlightLink = () =>{
    const ROUTES=  [['/','#view'], ['/feesEntry','#entry'],['/busDetails','#bus'],['/feesManagement','#edit']]
    let currenturl = window.location.href 
    let baseUrlLength = 21
    let intail = 0
    let next = 1
    let route = currenturl.slice(baseUrlLength)
    function clearStyle(){
        document.querySelectorAll('.link').forEach(element=>{
            element.style.color = 'rgb(156, 10, 10)'
        })
    }
    for(let i=1;i<ROUTES.length;i++){
      if(route.includes(ROUTES[i][intail])){
        clearStyle()
        document.querySelector(ROUTES[i][next]).style.color ='#222'
        return
      }
    }
    clearStyle()
    document.querySelector(ROUTES[intail][next]).style.color ='#222'
  }

export const syncFireStoreToLocalState = async()=> {
  const collectionRef = collection(database,'feesCollection')
  let data = await getDocs(collectionRef)
  let filteredData = data.docs.map(doc=>({...doc.data(),id:doc.id}))
  return filteredData
}