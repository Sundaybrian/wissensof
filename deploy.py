# Include standard modules
import getopt
import sys
import ftplib
import os
import logging



# cli part  start ----------------------------------------
# --------------------------------------------------------
# Get full command-line arguments
full_cmd_arguments = sys.argv
# Keep all but the first
argument_list = full_cmd_arguments[1:]
print(argument_list)
short_options = "ho:v"
long_options = ["FTP_SERVER=", "FTP_USERNAME=", "FTP_PASSWORD="]

try:
    arguments, values = getopt.getopt(argument_list, short_options, long_options)
except getopt.error as err:
    # Output error, and return with an error code
    print(str(err))
    sys.exit(2)

# Evaluate given options
for current_argument, current_value in arguments:
    if current_argument in "--FTP_SERVER=":
        server = current_value
        print("server url")
    elif current_argument in "--FTP_USERNAME=":
        username = current_value
        print("username")
    elif current_argument in "--FTP_PASSWORD=":
        password = current_value
        print("password")
# cli part  end-------------------------------------------
# --------------------------------------------------------


myFTP = ftplib.FTP(server, username, password)
dir_name = os.path.dirname(__file__)
filename = os.path.join(dir_name, 'build/')


def upload_this(path):
    files = os.listdir(path)
    os.chdir(path)
    for f in files:
        if os.path.isfile(f):
            fh = open(f, 'rb')
            myFTP.storbinary('STOR %s' % f, fh)
            fh.close()
        elif os.path.isdir(f):
            try:
                myFTP.mkd(f)
            except:
                logging.warning('Folder already exists but still continuing ')
            myFTP.cwd(f)
            upload_this(f)
    myFTP.cwd('..')
    os.chdir('..')


print('Starting ftp push')
upload_this(filename)
print("We are done uploading with python")
