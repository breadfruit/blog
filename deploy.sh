set -e
npm run docs:build
cd docs/.vitepress/dist
git init
git add -A
git commit -m 'deploy'
cd -