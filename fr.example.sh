#!/usr/bin/env bash
###############################################################################
    # fr - flask run : script that sets necessary environment variables
    #                  and runs a flask app
    #
    # Usage: ./fr (or just `fr` if on the PATH)
    #
    # Parameters: None
    #
    # @author    Michael Treanor  <skeptycal@gmail.com>
    # @copyright 2019 © Michael Treanor
    # @license   MIT <https://opensource.org/licenses/MIT>
    # @link      http://www.github.com/skeptycal
    #
    ###########################################################################

##### Bypass app name checking #####
# Set app_name to name of entry point app to bypass app_name checking.
# Set to "" to enable normal operation.
# app_name=""
# app_name="./flaskblog.py"

# if 'bypass' app_name is not given above, look for Flask App
if [ -z "$app_name" ]; then
    # if $1 is set and readable, set $app_name=$1
    if [ -n "$1" ] && [ -r "$1" ]; then
        app_name="$1"

    # if './app.py' is readable, set $app_name="./app.py"
    elif [ -r "app.py" ]; then
        app_name="app.py"

    # no valid Flask App found ... choose one?
    else
        echo -e "\n\n Flask App not found or not readable ...\n"
        echo -e "Do you want to symlink a python file to the default <app.py>? (Y/n)"
        read N=1 yes_no
        if [ "$yes_no" != [Nn] ]; then
            ls *.py
            echo "\n\n"
            read -p "Enter the name of your Flask App: " new_name
            if [ -r "$new_name" ]; then
                app_name=$new_name
            else
                echo -e "\n\n Flask App not found or not readable ...\n"
                exit 127
            fi
        else
            echo -e "\n\n Flask App not found or not readable ...\n"
            echo -e "Please create a Flask App that has a known filename. Exiting now ..."
            exit 127
        fi
    fi
fi

echo -e "\n\n -> Flask app set to $app_name ...\n\n"

# Enable Debug Mode (update contents without stopping flask)
export FLASK_DEBUG=1

export FLASK_APP=$app_name

flask run
