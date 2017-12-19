ng build --prod
copy-item "src\web.config" -destination "dist\web.config"
set-location "dist"
git init
git remote add origin https://bresheske@wt1a.scm.azurewebsites.net:443/wt1a.git
git add -A
git stage *
git commit -m "Web build"
git push --set-upstream origin master --force