require('total.js');
require('dbms').init('YOUR_CONNECTION_STRING');

// Default credentials (after login you can change it):
// user: info@totaljs.com
// pass: 123456

var id = UID();
var defuser = { id: id, photo: '', name: 'Peter Sirka', firstname: 'Peter', lastname: 'Sirka', email: 'petersirka@gmail.com', accesstoken: GUID(40), phone: '+421903163302', company: 'Total Avengers', language: 'en', reference: '', login: 'info@totaljs.com', password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', roles: [], blocked: false, customer: false, notifications: true, sa: true, sounds: true, dtcreated: new Date(), search: 'sirka–peter-infototaljscom', apps: {}, online: true, gender: 'male', countnotifications: 0, volume: 50, notificationsphone: true, notificationsemail: true, inactive: false, verifytoken: GUID(16), groups: [], supervisorid: null, ou: 'Total.js / Contributors', locality: 'Slovakia', position: 'Developer', datebeg: null, colorscheme: '', background: '', linker: 'peter-sirka', deputyid: null, ougroups: ['Total.js', 'Total.js/Contributors'] };

DBMS().insert(defuser).callback(console.log);