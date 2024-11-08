const { default: mongoose } = require("mongoose");


const BlogSchema = new mongoose.Schema(
    {
    title: {type : String , unique : true},
    body: String,
    author: String,
    } ,
    {
        timestamps: true
    }
);


const BlogModel = mongoose.models.Blogs || mongoose.model('Blogs', BlogSchema);

export default BlogModel;