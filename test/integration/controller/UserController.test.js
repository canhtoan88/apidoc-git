const chai = require('chai');
const expect = chai.expect;

const UserController = require('../../../api/controllers/User/UserController');

describe('User', () => {
    it('Create a new User', () => {
        const req = {
            body: {
                fullname: 'Canh Toan',
                username: 'canhtoan88',
                password: '123'
            }
        };
        //const isDone = UserController.postUser('canhtoan88', '123');
        const result = UserController.postUser.bind(this, req, {}, () => {});
        console.log(result);
    });
});

describe('Test time one', () => {
    it('Just test with number', () => {
        expect(1).not.to.equal(0);
    });
});

describe('Test two time nest', () => {
    describe('Test 2', () => {
        it('Total 2 number', () => {
            expect(1+2).to.equal(3);
        });
    });
});
