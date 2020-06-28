// load book model
const Book = require('models/book');

// exports.변수명 = ...
exports.list = (ctx) => {
    ctx.body = 'listed';
};

// Create function
exports.create = async (ctx) => {
    // export data from request body
    const {
        title,
        authors,
        publishedDate,
        price,
        tags
    } = ctx.request.body

    // create book instance
    const book = new Book({
        title,
        authors,
        publishedDate,
        price,
        tags
    });

    // write a real data to database when excute .save() function
    // return Promise
    try {
        await book.save()
    } catch (e) {
        // return HTTP state 500, Internal Error msg
        // record error
        return ctx.error(500, e);
    }

    // return result
    ctx.body = book;
};


exports.delete = (ctx) => {
    ctx.body = 'deleted';
};

exports.replace = (ctx) => {
    ctx.body = 'replaced';
};

exports.update = (ctx) => {
    ctx.body = 'updated';
};