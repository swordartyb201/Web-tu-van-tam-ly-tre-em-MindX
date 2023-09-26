const pathname = window.location.href.split('?');
const id = pathname[1].split('=')[1];
console.log(firebase)
const db=firebase.firestore()
db.collection('blogPost').doc(id).get()
// console.log(id)
.then((data)=>{       
        document.querySelector('#ga').innerHTML+=`
        <div id="baiviet">
                <span class="time left" style="color: black;">${data.data().time}</span>
               <div id="than">
                    <h1 class="title_news_detail mb10">
                        ${data.data().title}	</h1>
                
        
                <img src="${data.data().img}" alt="" width="500px"> 
                <p class="Normal">
                        ${data.data().content}

                </p> 
                <p id="author" style="color: black;">
                        ${data.data().author}
                </p>
            </div>

        </div>
        `
    
}).catch((err)=>{
    console.log(err)
})