cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Godis715/Movie-Quiz.git master:gh-pages

cd ..