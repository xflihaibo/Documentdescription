import axios from 'axios';

export default {
    sum(a, b) {
        return a + b;
    },
    getAuthor() {
        return {
            name: '李海波',
            age: 24
        };
    },
    getIntArray(num) {
        if (!Number.isInteger(num)) {
            throw Error('"getIntArray"只接受整数类型的参数');
        }

        let result = [];
        for (let i = 0, len = num; i < len; i++) {
            result.push(i);
        }
        console.log(result);
        return result;
    },
    fetchUser() {
        return axios
            .get('http://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(error => console.log(error));
    }
};
