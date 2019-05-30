Meteor.publish('todos', function () {
    if (!this.userId) {
        return Todos.find();
    } else {
        return Todos.find({
            userId: this.userId
        });
    }
});