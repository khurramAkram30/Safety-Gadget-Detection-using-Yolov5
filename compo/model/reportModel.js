const mongoose  = require("mongoose")

const repSchema = mongoose.Schema({
    emp_id:{
        type:String
    },
    notWearing:{
        type:[String]
    }
},{ timestamps: true })

module.exports = mongoose.model("Reports",repSchema)