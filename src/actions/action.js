
export const load = () => {
  return {
    type: 'LOAD_TODO',
    payload: 
      new Promise((resolve, reject) => {
        firebase.database().ref().once('value').then((snapshot) => {
          if(snapshot){  
            snapshot.forEach((data) => {
              let todos = data.val();
              resolve(todos);
            });
          } else {
            reject((Error("Network Error")));
          }
        });
      })
  }
}   
