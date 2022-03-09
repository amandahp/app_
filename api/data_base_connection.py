import mariadb
import sys
import os
from dotenv import load_dotenv


def connect_to_db():
    load_dotenv()
    try:
        myconn = mariadb.connect(
          host=os.getenv("host"),
          user=os.getenv("user"),
          passwd=os.getenv("passwd"),
          database=os.getenv("database")
        )
    except mariadb.Error as e:
        print(f"Error connecting to the database: {e}")
        sys.exit(1)
    return myconn


connect_to_db()
