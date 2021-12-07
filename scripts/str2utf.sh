# I modified this while loop structure from https://stackoverflow.com/questions/58868334/how-to-decdump-a-string-in-bash
echo $(echo -n "$1" | xxd -p -c 1 |
while read -r line; do
  echo -n "%2C$(( 16#$line ))"
done) | sed -r 's/%2C//'