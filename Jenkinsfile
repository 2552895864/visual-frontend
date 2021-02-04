/*
    语法文档：https://www.w3cschool.cn/jenkins/jenkins-qc8a28op.html
    语法生成器：http://jenkins.dev.wh.digitalchina.com/job/dc.devops/pipeline-syntax/
*/
podTemplate(inheritFrom: 'pod1',
    containers:[
        //基础容器 不可删除
        containerTemplate(name:'jnlp',image:'harbor.dev.wh.digitalchina.com/devops/jenkins-slave-dev:latest'),
        //添加需要的镜像容器
        //,containerTemplate(name:'maven',image:'harbor.dev.wh.digitalchina.com/library/maven:3-jdk-8',ttyEnabled:true,command:'cat')
        //添加nodejs环境
        containerTemplate(name:'node',image:'harbor.dev.wh.digitalchina.com/library/node:latest',ttyEnabled:true,command:'cat')
    ],
    volumes:[
        hostPathVolume(hostPath:'/var/run/docker.sock',mountPath:'/var/run/docker.sock')
    ]
){
    node(POD_LABEL){    
        properties([gitLabConnection('newgitlab.digitalchina.com')])
        if(BRANCH_NAME == 'test'){            
            gitlabBuilds(builds: ['Checkout','PushImage','Deploy']){
                stage 'Checkout'
                gitlabCommitStatus('Checkout'){
                    checkout scm
                }

                stage 'build'
                gitlabCommitStatus('build'){
                    container('node'){
                        sh '''
                            npm config set registry https://registry.npm.taobao.org
                            npm install 
                            npm run build
                        '''
                    }
                }  

                stage 'Push Image'
                gitlabCommitStatus('PushImage'){
                    def IMAGE_NAME = 'harbor.dev.wh.digitalchina.com/wisdom-port/visual-frontend:build-$BUILD_NUMBER'
                    def IMAGE = docker.build(IMAGE_NAME,'.')
                    withDockerRegistry(credentialsId:'xiaozlb-ddd9f7fc-f68e-4b54-99a8-8fd9916bdf4e',url:'https://harbor.dev.wh.digitalchina.com/'){ 
                        IMAGE.push()
                        sh 'docker rmi ' + IMAGE_NAME
                    }
                }  

                stage 'Deploy'
                //input(message:"部署到Rancher?", ok:"确定", submitter:"your itcode")
                gitlabCommitStatus('Deploy'){                
                    withCredentials([string(credentialsId: 'xiaozlb-08dfa60b-3c18-4da2-9f28-148853f49c0b', variable: 'token')]) {
                        sh 'rancher login https://rancher.wh.digitalchina.com/ --token $token --skip-verify --context c-wsxm5:p-5hghj'
                        //根据代码库中的deploy.yaml文件部署镜像
                        sh 'envsubst < Deploy.yaml | rancher kubectl apply -f -'
                    }
                }
            }
        }
        else{
            gitlabBuilds(builds: ['Checkout','Build','UnitTest','SonarTest']){
                stage 'Checkout'
                gitlabCommitStatus('Checkout'){
                    checkout scm
                }
                
                stage 'Build'
                gitlabCommitStatus('Build'){
                    echo 'Build'
                }
                
                stage 'Unit Test'
                gitlabCommitStatus('UnitTest'){
                    echo 'UnitTest'
                }                
                
                stage 'Sonar Test'
                gitlabCommitStatus('SonarTest'){
                    echo 'SonarTest'
                }
            } 
        }
    }
}