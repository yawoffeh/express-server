# Backend for a school management system
A server for a school management system that can send and request for data from mongodb database.
Built with Nodejs and express


## Add Student Data Endpoint
>post https://express-server-fz52tk31r-yawoffeh.vercel.app/add_student

#### Description
The body should be in the format
```json
{
  "studentid": "10584697",
  "name": "Peter Griffin",
  "course": "Statistics"
}
```

## Get Student Data Endpoint
>get https://express-server-fz52tk31r-yawoffeh.vercel.app/:studentid

Replace the **_":studentid"_** with any student's student id you want.
>EXAMPLE
```
get https://express-server-fz52tk31r-yawoffeh.vercel.app/10951682
```
