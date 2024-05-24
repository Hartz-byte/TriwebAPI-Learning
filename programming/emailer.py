import yagmail

user = "eternatelove@gmail.com"
app_code = ""

to = "harshmail281199@gmail.com"
subject = "Testing"
content = ["this is a test mail", "break.py"]

with yagmail.SMTP(user, app_code) as yag:
    yag.send(to, subject, content)