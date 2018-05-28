  var request = require('supertest')('http://cs.pc.test.shbaoyuantech.com/');

    describe('秦汉胡同登录测试api',function(){
      
        describe('登录接口测试',function(){
                it('API接口测试error',function(done){
                  request.get('/login?staffNo=cgq123&password=e10adc3949ba')
                    .set('Accept','*/*')
                    .expect(200)
                    .end(function(err,res){
                         if(res.body.code=='1')
                          done();
                        })
                });
        })
      describe('登录接口测试ok',function(){
                 it('正确的',function(done){
                  request.get('/login?staffNo=cgq123&password=e10adc3949ba59abbe56e057f20f883e')
                    // .send('staffNo=cgq123,password=e10adc3949ba59abbe56e057f20f883e')
                    .set('Accept','*/*')
                    .expect(200)
                    .end(function(err,res){
                     if(res.body.code=='0')
                           done();
                    })
                });
       })



      

      describe('合同列表测试ok',function(){
                 it('正确的',function(done){
                  request.post('/edu/post-contract-list')
                   .send({
                        companyId:"1",
                        contractNo:"",
                        contractStatus:"",
                        createEndTime:"",
                        createStartTime:"",
                        everyPage:20,
                        maxAmt:"",
                        maxLessonCount:"",
                        minAmt:"",
                        minLessonCount:"",
                        mobile:"",
                        ownerId:"",
                        pageIndex:1,
                        searchType:"00",
                        storeId:"",
                        studentName:"",
                   })
                   .set('Authorization','Bearer OWI5MDExM2UtYTk0Ni00NGY4LTk2ZmQtOTFhZGViYTU5OTZk')
                   .set('Accept','*/*')
                   .expect(200)
                   .set('Content-Type','application/json; charset=UTF-8')
                   .end(function(err,res){
                     if(res.body.code==0){
                            done();
                      }
                    })
                });
       })

    });
