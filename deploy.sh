set -e
npm run docs:build
cd docs/.vitepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:breadfruit/blog.git master:gh-pages


