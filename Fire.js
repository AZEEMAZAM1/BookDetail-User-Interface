import firebase from 'firebase'

class Fire{
    constructor(){
        this.init()
        this.checkAuth()
    }
8
    init = () => {
        if(!firebase.apps.length){
            firebase.initializeApp({
                
                    apiKey: "AIzaSyCnENZbkGzUlRMt4w2ZQe2le7ynRbnqIzg",
                    authDomain: "chatapp-4596b.firebaseapp.com",
                    projectId: "chatapp-4596b",
                    storageBucket: "chatapp-4596b.appspot.com",
                    messagingSenderId: "758337403785",
                    appId: "1:758337403785:web:8ef49e5a43f5a5721cbf58",
                    measurementId: "G-9DQK5H62FD"
                  

            });
        }
    };

    checkAuth = () =>{
        firebase.auth().onAuthStateChanged(user => {
            if (!user){
                firebase.auth().signInAnonymously();
            }
        });
    };
    send = messages => {
        messages.forEach(item =>{
            const message ={
                text: item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        })
   };
    parse = message => {
        const {user,text,timestamp} = message.val()
        const {key: _id}= message
        const createdAT = new Date(timestamp)

        return{
            _id,
            createdAT,
            text,
            user,
        };
    };

        get= callback=>{
            this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
        };
        off(){
            this.db.off()
        }
        
   get db(){
       return firebase.database().ref("messages");
   }
   get uid(){
       return(firebase.auth().currentUser || {}).uid
   }
}

export default new Fire();