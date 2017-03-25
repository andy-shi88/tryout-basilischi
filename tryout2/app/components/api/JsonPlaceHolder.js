let api = {
  url: 'http://10.0.2.2:3000/posts',
  getPosts() {
    return fetch(this.url, {method: 'GET', mode: 'cors'}).then((res) => res.json());
  },
  deletePost(rowData) {
    fetch(this.url + '/' + rowData.id, {method: 'DELETE', mode: 'cors'}).done(()=>{
      console.log(rowData.title + ' with id: ' + rowData.id + ' have been deleted!');
    });
  },
  updatePost(rowData) {
    fetch(this.url + '/' + rowData.id,
          {method: 'PUT',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({
            title: rowData.title,
            body: rowData.body
          })
          }
        ).done(()=>{
      console.log('POST with id: ' + rowData.id + ' have been UPDATED!');
    });
  },
  createPost(rowData) {
    fetch(this.url + '/' + rowData.id,
          {method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: rowData.id,
            userId: rowData.userId,
            title: rowData.title,
            body: rowData.body
          })
          }
        ).done(()=>{
      console.log(rowData.title + ' with id: ' + rowData.id + ' have been POSTED  !');
    });
  }
}
module.exports = api;
