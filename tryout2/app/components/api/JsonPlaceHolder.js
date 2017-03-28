let api = {
  url: 'http://10.0.2.2:3000/posts',
  getPosts() {
    return fetch(this.url, {method: 'GET', mode: 'cors'}).then((res) => res.json());
  },
  deleteContact(rowData) {
    fetch(this.url + '/' + rowData.id, {method: 'DELETE', mode: 'cors'}).done(()=>{
      console.log(rowData.firstname + " " + rowData.lastname + ' with id: ' + rowData.id + ' have been deleted!');
    });
  },
  updateContact(rowData) {
    fetch(this.url + '/' + rowData.id,
          {method: 'PUT',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({
            firstname: rowData.firstname,
            lastname: rowData.lastname,
            phone: rowData.phone,
            address: rowData.address,
            organization: rowData.organization
          })
          }
        ).done(()=>{
      console.log('Contact with id: ' + rowData.id + ' have been UPDATED!');
    });
  },
  createContact(rowData) {
    fetch(this.url,
          {method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({
            firstname: rowData.firstname,
            lastname: rowData.lastname,
            phone: rowData.phone,
            address: rowData.address,
            organization: rowData.organization
          })
          }
        ).done(()=>{
      console.log('Data POSTED!');
    });
  }
}
module.exports = api;
