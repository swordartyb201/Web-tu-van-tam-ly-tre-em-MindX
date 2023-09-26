console.log(firebase)
const db=firebase.firestore()
db.collection('blogPost').get()
.then((data)=>{
    data.forEach((element) => {        
        document.querySelector('#ga').innerHTML+=`
       
			
        <section class="post-content-area">
        <div class="container">
            <div class="row">
            <div class="col-lg-8 posts-list">
                    <div class="single-post row">
                        <div class="col-lg-3  col-md-3 meta-details">
                           
                            <div class="user-details row">
                                
                                <p class="date col-lg-12 col-md-12 col-6"><a href="#">${element.data().time}</a> <span class="lnr lnr-calendar-full"></span></p>
                                <p class="view col-lg-12 col-md-12 col-6"><a href="#">${element.data().title}</a> <span class="lnr lnr-eye"></span></p>
                                <p class="comments col-lg-12 col-md-12 col-6"><a href="#">${element.data().author}</a> <span class="lnr lnr-bubble"></span></p>						
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 ">
                            <div class="feature-img">
                                <img class="img-fluid" src="${element.data().img}" alt="">
                            </div>
                            <a class="posts-title" href="/blog1.html?id=${element.id}""><h3>${element.data().title}</h3></a>
                            <p class="excert">
                               ${element.data().description}
                            </p>
                           
                </div></div>
                
            </div>
            
    </section>
        `
    });
    
}).catch((err)=>{
    console.log(err)
})