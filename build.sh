git fetch
git reset --hard origin/main
# rm -rf node_modules - would this kill the sever?
npm install
cd react
echo "-- In react"
pwd
source build.sh
cd ..