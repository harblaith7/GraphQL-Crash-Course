const Query = {
    books: () => [{title: "gsy ;"}],
    animals: (parent, child, context, info) => {
        console.log(parent, child, context, info)
        return context.db
    }
}

module.exports = {
    Query
}