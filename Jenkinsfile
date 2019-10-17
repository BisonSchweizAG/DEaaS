#!groovy
@Library('operations') _
import tech.bison.operations.Gradle
import tech.bison.operations.AzureContainerRegistry
import tech.bison.projects.smartfarming.SmartFarming

timestamps {
  //noinspection GroovyAssignabilityCheck
  properties([
      buildDiscarder(
          logRotator(artifactDaysToKeepStr: '',
              artifactNumToKeepStr: '',
              daysToKeepStr: '',
              numToKeepStr: '30')
      ),
      gitLabConnection('gitlab.bisdevdom.ch'),
      pipelineTriggers([
          gitlab(
              triggerOnPush: true,
              triggerOnMergeRequest: true,
              branchFilterType: 'All')
      ])
  ])
  try {
    doBuild()
    if (!hudson.model.Result.SUCCESS.equals(currentBuild.rawBuild.getPreviousBuild()?.getResult())) {
      doBuildNotification()
    }
  } catch (e) {
    currentBuild.result = 'FAILED'
    doBuildNotification()
    throw (e)
  }
  finally {
    if (currentBuild.result == 'UNSTABLE') {
      doBuildNotification()
    }
  }
}

private def void doBuildNotification() {
  emailext attachLog: true,
      recipientProviders: [culprits(), developers(), requestor(), upstreamDevelopers()],
      subject: '$DEFAULT_SUBJECT',
      body: '$DEFAULT_CONTENT'
}

void doBuild() {
  node('ci-angular2') {
    sh('useJava 11')
    SmartFarming dev = SmartFarming.createDevEnv(this)

    stage('check Environment') {
        sh "env"
        sh '''nvm use 10
                npm -v'''
        sh '''nvm use 10
                node -v'''
        sh 'docker -v'
        echo "Building on branch: ${env.BRANCH_NAME}"
    }

    stage('checkout scm') {
      checkout scm
    }

    stage('build') {
        dir('server') {
            sh ('''nvm use 10
                ./gradlew clean build -PwithAngular=true''')
        }
    }

      stage('docker build and publish') {
          switch(env.BRANCH_NAME) {
              case 'develop':
                  docker.withRegistry(env.BUILD_DOCKER_REGISTRY, env.BUILD_DOCKER_REGISTRY_CREDENTIALS_ID) {
                      def image = 'bison/scs-starter/develop'
                      def tagName = 'latest'
                      dockerImage = docker.build(image, "--build-arg JAR_FILE=scsstarter.jar .")
                      dockerImage.push(tagName)
                      imageRepoDigest = docker.script.sh(script: "docker inspect --format='{{index .RepoDigests 0}}' $image:$tagName", returnStdout: true).replaceAll("'",'').trim().split('@')[1]
                  };
                  break;
              case 'master':
                  docker.withRegistry(env.BUILD_DOCKER_REGISTRY, env.BUILD_DOCKER_REGISTRY_CREDENTIALS_ID) {
                      def image = 'bison/scs-starter/master'
                      def tagName = 'latest'
                      println docker
                      dockerImage = docker.build(image, "--build-arg JAR_FILE=scsstarter.jar .")
                      dockerImage.push(tagName)
                      println docker.script.sh(script: "docker pull repo.bison-group.com:5000/$image:$tagName", returnStdout: true)
                      imageRepoDigest = docker.script.sh(script: "docker inspect --format='{{index .RepoDigests 0}}' repo.bison-group.com:5000/$image:$tagName", returnStdout: true).replaceAll("'",'').trim().split('@')[1]
                  };
                  break;
          }
      }
    }
}

