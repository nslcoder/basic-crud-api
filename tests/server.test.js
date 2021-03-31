const chai = require('chai'); 
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const server = require('../app');
const Post = require('../models/post');

chai.use(chaiHttp);

describe('Post API endpoints', () => {
    beforeEach(done => {
        const post = new Post({
            title: 'Use test',
            body: 'Unit and integration tests are written by the developer.'
        });
        post.save(err => {
            if(err) return console.log(err);
            done();
        });
    });

    afterEach(done => {
        Post.collection.drop(); 
        done();
    });

    after(done => {
        mongoose.connection.close();
        done();
    })
    
    it('should list all posts', (done) => {
        chai.request(server)
          .get('/apis')
          .end((err, res) => {
              expect(err).to.be.null;
              expect(res).to.have.status(200);
              expect(res.body[0]).to.have.property('_id');
              expect(res.body[0]).to.have.property('title');
              expect(res.body[0]).to.have.property('body'); 
              done();
          })
    })
   
    it('should add a post', (done) => {
        chai.request(server)
          .post('/apis')
          .send({
            title: 'Use test',
            body: 'Unit and integration tests are written by the developer.'
          })
          .end((err, res) => {
              expect(err).to.be.null;
              expect(res).to.have.status(200);
              expect(res.body).to.deep.equal({ message: 'Post is created.'});
              done();
          })
    })

    it('should update a post', (done) => {
        chai.request(server)
          .get('/apis')
          .end((err, res) => {
              if(err) return console.log(err);
              chai.request(server)
                .put('/apis/' + res.body[0]._id)
                .send({
                    title: 'Use tests',
                    body: 'Unit & integration tests are written by the developer.'
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.deep.equal({ message: 'Post is updated.'});
                    done();
                })
          })
    })
 
    it('should delete a post', (done) => {
        chai.request(server)
          .get('/apis')
          .end((err, res) => {
              if(err) return console.log(err);
              chai.request(server)
                .delete('/apis/' + res.body[0]._id)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.deep.equal({ message: 'Post is deleted.'});
                    done();
                })
          })
    })
});