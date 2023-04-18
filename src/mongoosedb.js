const mongoose = require("mongoose");
const user = "hugosilvag6";
const pass = "123456abc"
const database = "todo_sample"
const serverName = "cluster0.7jwij5p.mongodb.net"


// mongodb+srv://hugosilvag6:<password>@cluster0.7jwij5p.mongodb.net/?retryWrites=true&w=majority

module.exports = {
    init: () => {
        mongoose
        .connect(
            `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        .then((res) => console.log(`Connection succesfull ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    }
}