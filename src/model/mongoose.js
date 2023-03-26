const User = mongoose.model('User', {
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});

const user = new User({
    name: 'Justin',
    age: 26,
});

user.save()
    .then(() => console.log('Model created'))
    .catch(() => console.log('Failed'));
