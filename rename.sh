git status | grep renamed | awk '{print "sh find-replace.sh \""$2"\" \""$4"\""}' > find-replace-wrapper.sh
cat find-replace-wrapper.sh | parallel --progress -v
rm find-replace-wrapper.sh
