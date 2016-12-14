
export const load = () => {
  return {
    type: 'LOAD_TODO',
    payload: 
      new Promise((resolve, reject) => {
        const ref = firebase.database().ref().child('products').limitToLast(6);
        ref.once('value').then((snapshot) => {
          let todos = [];
          if(snapshot) {  
            snapshot.forEach(data => {
              todos.push(data.val());
            });
          } else {
            reject((Error("Network Error")));
          }
            resolve(todos);
        });
      }
    )
  }
}   
