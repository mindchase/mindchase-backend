let courses = []

const getCourses = async ()=>{

    //i would like to use axios ;?
 //pot the data
    try {
     const res=  await axios('https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are')
     const data =   await res.json()
     courses = data.results
     console.log("courses loading",data.info.count)
    }catch(error) {
        console.error("Unable to load  Courses",error
        )
    } 

}

//getCourse()



module.exports=courses