# dro=$(ls -a)
# echo "$dro"

pwd
IFS=$'\n'

for DR in $(ls)
do
    if [[ -d $DR ]]
    then
        # echo $DR
        
        # echo "asfa"
        cd $DR
        # mkdir webp
        # rmdir webp

        # IFS=$'.'
        for FILE in $(ls)
        do

            # echo $FILE
            if [[ -f "$FILE" ]]
            then
                echo $FILE
                cwebp -resize 720 720 -q 80 $FILE -o $FILE.webp

                echo "done $FILE \n\n\n"
				rm $FILE
                # sleep 3
            else
                echo "no $FILE \n\n\n"
            fi

        done
        cd ..
    fi
done