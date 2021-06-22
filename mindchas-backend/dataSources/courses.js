let courses = []

const getCourses = async ()=>{

    //i would like to use axios ;?
 //pot the data
    try {
     const res=  await fetch('')
     const data =   await res.json()
     courses = data.results
     console.log("courses loading",data.info.count)
    }catch(error) {
        console.error("Unable to load  Courses",error)
    } 

}

getCourse()



module.exports=courses