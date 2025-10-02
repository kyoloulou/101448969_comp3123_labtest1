const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = {message: 'delayed success!'}
            resolve(success);
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            try {
                throw new Error('delayed exception!');
            } catch (e) {
                reject({error: e.message});
            }
        }, 500)
    })
}

resolvedPromise()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));