import database from '../firebase'
import {collection,addDoc} from '@firebase/firestore'
const feeCollectionRef = collection(database, 'feesCollection')

export const viewBasicInfoOfStudent =(data,usn)=>{
    let studentData = data.filter(doc => doc.usn === usn)
    let CollegeFee = false
    let BusFee = false
    let ExamFee = false
    let HostelFee = false
    studentData.forEach(each =>{
        if(each.type === 'College Fee') CollegeFee =true
        if(each.type === 'Bus Fee') BusFee =true
        if(each.type === 'Exam Fee') ExamFee =true
        if(each.type === 'Hostel Fee') HostelFee =true 
    })
    
    return {BusFee,CollegeFee,HostelFee,ExamFee}
}

export  const insertFeesDetailsOfStudent = async(data) =>{
    await addDoc(feeCollectionRef ,data)
}