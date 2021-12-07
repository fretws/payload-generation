# This script takes in a string as a command line arg and prints a comma separated list of its decimal ascii character codes, where the commas are in their hexadecimal ascii code representation for use in URLs, i.e. '%2C'.
# Example:
# $ bash str2chr.sh hello
# hello -> 104,101,108,108,111 -> 104%2C101%2C108%2C108%2C111
# `hello` is converted to ascii codes, then separated by '%2C'


# I got the functions to convert to and from ascii codes from https://unix.stackexchange.com/questions/92447/bash-script-to-get-ascii-values-for-alphabet

# codeToChar 100
# d // output
codeToChar() {
  [ "$1" -lt 256 ] || return 1
  printf "\\$(printf '%03o' "$1")"
}

# charToCode ,
# 44 // output
charToCode() {
  LC_CTYPE=C printf '%d' "'$1"
}

input=$1
charCodes=()
# I learned to iterate through characters in a string from https://stackoverflow.com/questions/10551981/how-to-perform-a-for-loop-on-each-character-in-a-string-in-bash/10552175
for (( i=0; i<${#input}; i++ )); do
  code=$(charToCode ${input:$i:1})
  # For whatever reason, space characters are mapping to the ascii code for null. This if/else fixes that
  if [ $code -eq 0 ]; then
    charCodes+=( 32 )
  else
    charCodes+=( $code )
  fi
done

echo "${charCodes[*]}" | sed -r 's/ /%2C/g'
