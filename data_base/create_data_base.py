import mariadb
import os
from dotenv import load_dotenv

load_dotenv()

myconn = mariadb.connect(host=os.getenv("host"), user=os.getenv("user"), passwd=os.getenv("passwd")) # noqa

cur = myconn.cursor()

try:
    cur.execute("create database Testeee")
    dbs = cur.execute("show databases")
except Exception:
    myconn.rollback()

for x in cur:
    print(x)

myconn.close()
