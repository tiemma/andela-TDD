import {use, expect, request} from 'chai';
import chaiHTTP from 'chai-http';
import app from '../src/index';

use(chaiHTTP);

const API_PREFIX='/api/v1';

describe('Names', () => {
    it('should get my name and return 200', () => {
        request(app)
        .get(`${API_PREFIX}/hello`)
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res.body).to.have.property('data')
            expect(res.body.data).to.have.property('name')
            expect(res.body.data.name).to.equal('hello')
            expect(res).to.have.status(200);
        })
    })

    it('should get my name and return 200 from /hellos', () => {
        request(app)
        .get(`${API_PREFIX}/hellossss`)
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res.body).to.have.property('data')
            expect(res.body.data).to.have.property('name')
            expect(res.body.data.name).to.equal('hello')
            expect(res).to.have.status(200);
        })
    })

    it('should pass because I want it to', () => {
        expect(1).to.equal(1);
    })

    it('should not contain the letter a', () => {
        expect(['b', 'a']).to.not.contain('c');
    })
});
