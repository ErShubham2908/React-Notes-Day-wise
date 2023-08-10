import { logRoles } from "@testing-library/react"

axios.get('url').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


fetch('url').then((data) => data.json())
.then((item) => console.log(item))
.catch((err) => console.log(err))