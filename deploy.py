import ftplib
import os
import logging

server = os.environ['FTP_SERVER']
username = os.environ['FTP_USERNAME']
password = os.environ['FTP_PASSWORD']
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
