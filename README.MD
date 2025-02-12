
VS1
https://drive.google.com/drive/folders/1AfDRJo-sFQxXQIb8LtyLJUMzaTlBjQmm


git download karne ke baad usko khol kar usmein, OPEN GIT BASH

cd desktop/
mkdir devops
cd devops/
git init
touch test.txt
git add .
git commit -m "initial commit"
git branch neww
git checkout neww
touch test2.txt
git add .
git commit -m "branch commit"
ls
git checkout master
git merge neww


nahi to normally bas online khol kar, dono ko alag branch main text file banao aur jab ho jaaye to aapas main pull and compare karo aur merge kar do

VS2

run these commands in git bash

$ cd desktop/
$ mkdir devops
$ cd devops/

(online ek repository banao aur uska link copy karlo)

$ git clone https://github.com/Mahi2708/sample-programs.git
$ cd sample-programs/
$ cat README.md
$ nano README.md
$ git add .
$git commit -m  "committed2"
$ git push origin master/main


nahi to agar online accept kar lein toh 2 git accounts bana lo, ek main se ek project fork karo aur dusre main add karlo 
phir sync on rahe yeh check karke uske bagal main contribute hai, wahan se contribute karoge to jo host account hai jahan se fork kiya tha waha ek pull request generate ho jaegi, usko jaakar wahan se compare and pull aur merge kar do toh ho jaega sab

VS3

go to github
make a new repository - prgm3
add a new file- .github
add another name- workflows
add yml file- action.yml

yml file:

name: My First GitHub Actions

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        python-version: [3.8, 3.9]

    steps: 

    - uses: actions/checkout@v3
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: ${{ matrix.python-version }}

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install pytest

    - name: Run tests
      run: |
        cd src
        python -m pytest addition.py



src/addition.py

def add(a,b):
  return a+b

def test_add():
  assert add(1,2) == 3
  assert add(1,-1) == 0

VS4

docker --version
docker images 
docker pull redis
docker images
docker ps
docker run --privileged redis
docker ps
docker exec -it <cid> sh
docker stop <cid>
docker rm <cid>
docker rmi<iid>

VS5

make a folder named docker
open that in vs code

make a folder named sample
in that folder add two files : index.html and dockerfile

<!DOCTYPE html>
<html>
<head>
    <title>Sample Web App</title>
</head>
<body>
    <h1>Welcome to the Sample Web Application!</h1>
    <p>This is a basic HTML and JavaScript application running in a Docker container.</p>
    <script>
        console.log('Hello from JavaScript!');
    </script>
</body>
</html>



FROM nginx:alpine

COPY index.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
