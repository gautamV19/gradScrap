from selenium import webdriver
from time import sleep

username = "ee20b144"
password = "2z4}[C*Dw8a"

url = "https://www.iitm.ac.in/viewgrades/"
driver = webdriver.Chrome("/Users/gautam/Downloads/chromedriver")

driver.get(url)
driver.find_element_by_name("rollno").send_keys(username)
driver.find_element_by_name("pwd").send_keys(password)
driver.find_element_by_name("submit").click()
print("Logged in successfully")
sleep(7)
